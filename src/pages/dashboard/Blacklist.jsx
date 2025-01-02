import React, { useState } from 'react'

    export default function Blacklist() {
      const [blacklist, setBlacklist] = useState([
        { id: 1, number: '+55 11 99999-9999', clientName: 'Cliente A' },
        { id: 2, number: '+55 11 88888-8888', clientName: 'Cliente B' },
        { id: 3, number: '+55 11 77777-7777', clientName: 'Cliente C' },
        { id: 4, number: '+55 11 66666-6666', clientName: 'Cliente D' },
        { id: 5, number: '+55 11 55555-5555', clientName: 'Cliente E' },
      ])
      const [newNumber, setNewNumber] = useState('')
      const [newClientName, setNewClientName] = useState('')
      const [search, setSearch] = useState('')
      const [currentPage, setCurrentPage] = useState(1)
      const itemsPerPage = 3

      const handleAddToBlacklist = () => {
        if (!newNumber || !newClientName) {
          alert('Preencha todos os campos!')
          return
        }
        setBlacklist([...blacklist, { id: blacklist.length + 1, number: newNumber, clientName: newClientName }])
        setNewNumber('')
        setNewClientName('')
      }

      const handleRemoveFromBlacklist = (id) => {
        setBlacklist(blacklist.filter((item) => item.id !== id))
      }

      const filteredBlacklist = blacklist.filter(
        (item) =>
          item.number.includes(search) ||
          item.clientName.toLowerCase().includes(search.toLowerCase())
      )

      const paginate = (array, page) => {
        const startIndex = (page - 1) * itemsPerPage
        return array.slice(startIndex, startIndex + itemsPerPage)
      }

      const totalPages = Math.ceil(filteredBlacklist.length / itemsPerPage)

      return (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Blacklist</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Os clientes que estiverem na blacklist não serão atendidos pelo agente de IA.
          </p>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Número
                </label>
                <input
                  type="text"
                  value={newNumber}
                  onChange={(e) => setNewNumber(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                  placeholder="Digite o número"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome do Cliente
                </label>
                <input
                  type="text"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                  placeholder="Digite o nome do cliente"
                />
              </div>
              <button
                onClick={handleAddToBlacklist}
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
              >
                Adicionar à Blacklist
              </button>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Números na Blacklist</h2>
              <div className="mb-4">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                  placeholder="Pesquisar número ou cliente"
                />
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="p-3">Número</th>
                    <th className="p-3">Cliente</th>
                    <th className="p-3">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginate(filteredBlacklist, currentPage).map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3">{item.number}</td>
                      <td className="p-3">{item.clientName}</td>
                      <td className="p-3">
                        <button
                          onClick={() => handleRemoveFromBlacklist(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50"
                >
                  Anterior
                </button>
                <span className="text-gray-700 dark:text-gray-300">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50"
                >
                  Próxima
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
