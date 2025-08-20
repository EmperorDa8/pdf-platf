import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Download, Shield, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your Premium PDF Library
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Access a curated collection of high-quality PDFs. Free tier available, 
          upgrade to Pro for exclusive content and unlimited downloads.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Free
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our PDF Library?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Curated Content</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                Hand-picked PDFs across various categories and topics
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Easy Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                Simple download process with organized categories
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Secure Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                Built with enterprise-grade security and privacy
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                Request new content and contribute to our growing library
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Exploring?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of users who trust our PDF library for their learning and research needs.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Create Free Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

