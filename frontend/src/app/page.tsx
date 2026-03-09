'use client'

import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { CreditCard, DollarSign, TrendingUp, Users } from 'lucide-react'

export default function HomePage() {
  const { data: healthCheck, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: () => apiClient.get('/health'),
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-900">
            BANKAPP V1
          </h1>
          <p className="text-lg text-secondary-600">
            Modern Banking Application
          </p>
          {isLoading ? (
            <div className="mt-4 text-sm text-secondary-500">
              Connecting to backend...
            </div>
          ) : (
            <div className="mt-4 text-sm text-green-600">
              Backend Status: {healthCheck?.data?.status || 'Connected'}
            </div>
          )}
        </header>

        {/* Feature Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<CreditCard className="h-8 w-8" />}
            title="Account Management"
            description="Manage your accounts with ease"
          />
          <FeatureCard
            icon={<DollarSign className="h-8 w-8" />}
            title="Transactions"
            description="Track all your financial activities"
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8" />}
            title="Analytics"
            description="Gain insights from your spending"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Multi-User"
            description="Support for multiple users"
          />
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-secondary-900">
            Get Started Today
          </h2>
          <p className="mb-6 text-secondary-600">
            Experience the future of banking with our modern, secure platform.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700">
              Create Account
            </button>
            <button className="rounded-lg border border-primary-600 px-6 py-3 text-primary-600 hover:bg-primary-50">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-center justify-center text-primary-600">
        {icon}
      </div>
      <h3 className="mb-2 text-center text-lg font-semibold text-secondary-900">
        {title}
      </h3>
      <p className="text-center text-sm text-secondary-600">{description}</p>
    </div>
  )
}