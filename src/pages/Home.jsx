import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Home() {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center px-4">
          <div className="max-w-6xl w-full text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Automate Your WhatsApp Customer Service
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Streamline your customer interactions with AI-powered automation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic</h2>
                <p className="text-gray-600 mb-6">$10/month</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>1000 messages/month</li>
                  <li>1 WhatsApp number</li>
                  <li>Basic AI assistant</li>
                </ul>
                <Link
                  to="/register"
                  className="inline-block w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Pro</h2>
                <p className="text-gray-600 mb-6">$25/month</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>5000 messages/month</li>
                  <li>3 WhatsApp numbers</li>
                  <li>Advanced AI assistant</li>
                </ul>
                <Link
                  to="/register"
                  className="inline-block w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h2>
                <p className="text-gray-600 mb-6">$50/month</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>Unlimited messages</li>
                  <li>10 WhatsApp numbers</li>
                  <li>Custom AI assistant</li>
                </ul>
                <Link
                  to="/register"
                  className="inline-block w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                to="/login"
                className="text-blue-600 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-blue-600 hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )
    }
