'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Crown, FileText, Download, Zap } from 'lucide-react'
import { toast } from 'sonner'

export default function Pricing() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async () => {
    if (!user) {
      toast.error('Please sign in to upgrade')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: 'YOUR_STRIPE_PRICE_ID' }), // Replace with your actual price ID
      })

      const { sessionId } = await res.json()

      const stripe = await getStripe()
      if (stripe) {
        stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      toast.error('Failed to start checkout')
    } finally {
      setLoading(false)
    }
  }

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Access to free PDFs',
        'Basic search and browse',
        'Email support',
        '5 downloads per month'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'Best for power users and professionals',
      features: [
        'Access to ALL PDFs (Free + Pro)',
        'Unlimited downloads',
        'Priority support',
        'Advanced search filters',
        'PDF request priority',
        'Early access to new content'
      ],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'default' as const,
      popular: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-6" 
                  variant={plan.buttonVariant}
                  onClick={plan.name === 'Pro' ? handleUpgrade : undefined}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can I cancel my Pro subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your Pro subscription at any time. You'll continue to have access until the end of your current billing period.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What happens to my downloads if I downgrade to Free?</h3>
              <p className="text-gray-600">You'll keep access to any PDFs you've already downloaded, but you'll only be able to access free PDFs going forward.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for Pro subscriptions. If you're not satisfied, contact us for a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
