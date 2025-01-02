import React, { useState } from 'react'

    export default function Admin() {
      const [evolutionEndpoint, setEvolutionEndpoint] = useState('')
      const [n8nEndpoint, setN8nEndpoint] = useState('')

      const handleSaveEndpoints = () => {
        alert('Endpoints saved successfully!')
      }

      return (
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h2 className="text-xl font-bold mb-2">Evolution API Endpoint</h2>
                <input
                  type="text"
                  value={evolutionEndpoint}
                  onChange={(e) => setEvolutionEndpoint(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Enter Evolution API endpoint"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">n8n Endpoint</h2>
                <input
                  type="text"
                  value={n8nEndpoint}
                  onChange={(e) => setN8nEndpoint(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Enter n8n endpoint"
                />
              </div>
            </div>
            <button
              onClick={handleSaveEndpoints}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Endpoints
            </button>
          </div>
        </div>
      )
    }
