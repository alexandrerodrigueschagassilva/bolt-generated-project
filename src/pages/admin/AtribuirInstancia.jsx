import React, { useState } from 'react'
    import Select from 'react-select'

    export default function AtribuirInstancia() {
      const [selectedUser, setSelectedUser] = useState(null)
      const [instanceName, setInstanceName] = useState('')
      const [instanceId, setInstanceId] = useState('')

      // Dados mockados de usuários
      const mockUsers = [
        {
          value: '1',
          label: 'Empresa A (empresaA@example.com) - (11) 99999-9999',
          company_name: 'Empresa A',
          email: 'empresaA@example.com',
          phone: '(11) 99999-9999',
        },
        {
          value: '2',
          label: 'Empresa B (empresaB@example.com) - (11) 88888-8888',
          company_name: 'Empresa B',
          email: 'empresaB@example.com',
          phone: '(11) 88888-8888',
        },
        {
          value: '3',
          label: 'Empresa C (empresaC@example.com) - (11) 77777-7777',
          company_name: 'Empresa C',
          email: 'empresaC@example.com',
          phone: '(11) 77777-7777',
        },
      ]

      const handleAssignInstance = () => {
        if (!selectedUser || !instanceName || !instanceId) {
          alert('Preencha todos os campos!')
          return
        }

        alert(`Instância atribuída com sucesso para:\n${selectedUser.company_name} (${selectedUser.email})`)
        setSelectedUser(null)
        setInstanceName('')
        setInstanceId('')
      }

      return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Atribuir Instância do Evolution API
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Selecione o Usuário
              </label>
              <Select
                options={mockUsers}
                value={selectedUser}
                onChange={(selectedOption) => setSelectedUser(selectedOption)}
                placeholder="Pesquisar usuário..."
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome da Instância
              </label>
              <input
                type="text"
                value={instanceName}
                onChange={(e) => setInstanceName(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                placeholder="Digite o nome da instância"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                ID da Instância
              </label>
              <input
                type="text"
                value={instanceId}
                onChange={(e) => setInstanceId(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-900"
                placeholder="Digite o ID da instância"
              />
            </div>
            <button
              onClick={handleAssignInstance}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Atribuir Instância
            </button>
          </div>
        </div>
      )
    }
