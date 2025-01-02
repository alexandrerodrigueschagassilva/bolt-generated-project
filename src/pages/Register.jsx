import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { supabase } from '../supabaseClient'

    export default function Register() {
      const [companyName, setCompanyName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [plan, setPlan] = useState('basic')
      const [isLoading, setIsLoading] = useState(false)
      const [showSuccessModal, setShowSuccessModal] = useState(false)
      const navigate = useNavigate()

      const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              company_name: companyName,
              plan,
            },
          },
        })
        setIsLoading(false)
        if (error) {
          alert(error.message)
        } else {
          setShowSuccessModal(true)
        }
      }

      const handleCloseModal = () => {
        setShowSuccessModal(false)
        navigate('/login')
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h1>
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plan</label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="basic">Basic</option>
                  <option value="pro">Pro</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </form>

            {showSuccessModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
                  <p className="text-gray-600 mb-6">
                    A confirmation email has been sent to <span className="font-semibold">{email}</span>. Please check your inbox and confirm your account.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }
