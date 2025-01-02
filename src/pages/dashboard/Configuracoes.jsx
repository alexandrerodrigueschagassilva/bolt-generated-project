import React, { useState } from 'react'

    export default function Configuracoes() {
      const [settings, setSettings] = useState({
        notifications: true,
        theme: 'light',
      })

      const handleChange = (e) => {
        const { name, checked } = e.target
        setSettings((prev) => ({ ...prev, [name]: checked }))
      }

      return (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Configurações</h1>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700 dark:text-gray-300">Receber notificações</span>
              </label>
            </div>
          </div>
        </div>
      )
    }
