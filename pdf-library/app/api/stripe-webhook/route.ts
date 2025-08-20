import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

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

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const { error } = await supabase
    .from('subscriptions')
    .update({
      status: subscription.status,
      current_period_end: new Date(subscription.current_period_end * 1000),
    })
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    throw new Error(`Error updating subscription: ${error.message}`);
  }

  console.log(`Subscription ${subscription.id} updated`);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const { error } = await supabase
    .from('subscriptions')
    .update({ status: 'canceled' })
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    throw new Error(`Error canceling subscription: ${error.message}`);
  }

  console.log(`Subscription ${subscription.id} canceled`);
}

export async function POST(req: NextRequest) {
  const buf = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.log(`❌ Error message: ${errorMessage}`);
    return new NextResponse(`Webhook Error: ${errorMessage}`, { status: 400 });
  }

  console.log('✅ Success:', event.id);

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Webhook handler error: ${errorMessage}`);
    return new NextResponse(`Webhook handler error: ${errorMessage}`, { status: 500 });
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}