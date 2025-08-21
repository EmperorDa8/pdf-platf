import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id;
  const stripeCustomerId = session.customer;
  const stripeSubscriptionId = session.subscription;

  if (!userId || !stripeCustomerId || !stripeSubscriptionId) {
    throw new Error('Missing required data in checkout session');
  }

  // Update user with stripe customer id
  const { error: userError } = await supabase
    .from('users')
    .update({ stripe_customer_id: stripeCustomerId as string })
    .eq('id', userId);

  if (userError) {
    throw new Error(`Error updating user: ${userError.message}`);
  }

  // Create new subscription
  const { error: subError } = await supabase.from('subscriptions').insert({
    user_id: userId,
    stripe_subscription_id: stripeSubscriptionId as string,
    status: 'active',
  });

  if (subError) {
    throw new Error(`Error creating subscription: ${subError.message}`);
  }

  console.log(`Subscription created for user ${userId}`);
}



export async function POST(req: NextRequest) {
  // Temporarily disable Stripe webhook processing
  console.log('Stripe webhook processing is currently disabled.');
  return new NextResponse(JSON.stringify({ received: true, message: 'Webhook processing disabled' }), { status: 200 });
}