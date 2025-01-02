import React, { useState } from 'react'

    export default function Integracoes() {
      const [trinksName, setTrinksName] = useState('')
      const [trinksApiKey, setTrinksApiKey] = useState('')
      const [prompt, setPrompt] = useState(
        'Você é um assistente virtual para uma barbearia. Ajude os clientes a agendar serviços, responder perguntas sobre horários disponíveis e fornecer informações sobre os serviços oferecidos.'
      )

      const handleSaveTrinks = () => {
        if (!trinksName || !trinksApiKey) {
          alert('Preencha todos os campos!')
          return
        }
        alert(`Integração Trinks salva:\nNome: ${trinksName}\nAPI Key: ${trinksApiKey}\nPrompt: ${prompt}`)
        setTrinksName('')
        setTrinksApiKey('')
        setPrompt('')
      }

      return (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Integrações</h1>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Trinks</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome do Estabelecimento
                </label>
                <input
                  type="text"
                  value={trinksName}
                  onChange={(e) => setTrinksName(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                  placeholder="Digite o nome do estabelecimento"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  API Key do Trinks
                </label>
                <input
                  type="text"
                  value={trinksApiKey}
                  onChange={(e) => setTrinksApiKey(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                  placeholder="Digite a API Key"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prompt do Agente
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                  rows="4"
                />
              </div>
              <button
                onClick={handleSaveTrinks}
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                Salvar Integração
              </button>
            </div>
          </div>
        </div>
      )
    }
