import React, { useState, useEffect } from 'react'
    import { supabase } from '../supabaseClient'
    import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
    import {
      HomeIcon,
      PuzzlePieceIcon,
      MoonIcon,
      SunIcon,
      ArrowLeftOnRectangleIcon,
      PlusCircleIcon,
      UserGroupIcon,
      CreditCardIcon,
      ShieldExclamationIcon,
      UserIcon,
    } from '@heroicons/react/24/solid'

    export default function Dashboard() {
      const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
      )
      const [isAdmin, setIsAdmin] = useState(false) // Mock admin status
      const navigate = useNavigate()
      const location = useLocation()

      useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.setItem('darkMode', darkMode)
      }, [darkMode])

      const toggleDarkMode = () => {
        setDarkMode(!darkMode)
      }

      const handleLogout = async () => {
        await supabase.auth.signOut()
        localStorage.removeItem('token')
        navigate('/login')
      }

      const isActive = (path) => {
        return location.pathname === path
      }

      return (
        <div className={`min-h-screen flex ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">AutoTrinks</h2>
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all ${
                  isActive('/dashboard') && 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Visão Geral
              </Link>
              <Link
                to="/dashboard/integracoes"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all ${
                  isActive('/dashboard/integracoes') && 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <PuzzlePieceIcon className="w-5 h-5 mr-2" />
                Integrações
              </Link>
              <Link
                to="/dashboard/planos"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all ${
                  isActive('/dashboard/planos') && 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <CreditCardIcon className="w-5 h-5 mr-2" />
                Planos
              </Link>
              <Link
                to="/dashboard/blacklist"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all ${
                  isActive('/dashboard/blacklist') && 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <ShieldExclamationIcon className="w-5 h-5 mr-2" />
                Blacklist
              </Link>
              {isAdmin && (
                <>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Administração
                    </h3>
                    <Link
                      to="/dashboard/atribuir-instancia"
                      className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all ${
                        isActive('/dashboard/atribuir-instancia') && 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      <PlusCircleIcon className="w-5 h-5 mr-2" />
                      Atribuir Instância
                    </Link>
                    <Link
                      to="/dashboard/gerenciar-usuarios"
                      className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all ${
                        isActive('/dashboard/gerenciar-usuarios') && 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      <UserGroupIcon className="w-5 h-5 mr-2" />
                      Gerenciar Usuários
                    </Link>
                  </div>
                </>
              )}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all"
              >
                {darkMode ? (
                  <SunIcon className="w-5 h-5 mr-2" />
                ) : (
                  <MoonIcon className="w-5 h-5 mr-2" />
                )}
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all mt-2"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />
                Sair
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <Outlet />
          </div>
        </div>
      )
    }
