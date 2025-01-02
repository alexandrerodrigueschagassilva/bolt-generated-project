import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'

    export default function Login() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [isLoading, setIsLoading] = useState(false)
      const [error, setError] = useState(null)
      const navigate = useNavigate()

      const handleLogin = (isAdmin) => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          localStorage.setItem('token', 'mock-token')
          localStorage.setItem('isAdmin', isAdmin)
          navigate('/dashboard')
        }, 1000)
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Bem-vindo de volta</h1>
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                <p className="text-sm">{error}</p>
              </div>
            )}
            <div className="space-y-4">
              <button
                onClick={() => handleLogin(true)}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                {isLoading ? 'Entrando...' : 'Entrar como Admin'}
              </button>
              <button
                onClick={() => handleLogin(false)}
                disabled={isLoading}
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
              >
                {isLoading ? 'Entrando...' : 'Entrar como Cliente'}
              </button>
            </div>
          </div>
        </div>
      )
    }
