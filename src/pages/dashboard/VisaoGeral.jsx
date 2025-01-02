import React from 'react'

    export default function VisaoGeral() {
      return (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Visão Geral</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Resumo</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Aqui você pode ver um resumo das suas atividades recentes.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Estatísticas</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Visualize suas estatísticas de uso e desempenho.
              </p>
            </div>
          </div>
        </div>
      )
    }
