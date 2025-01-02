import React, { useState, useEffect } from 'react'
    import { supabase } from '../../supabaseClient'

    export default function Mensagens() {
      const [messages, setMessages] = useState([])

      useEffect(() => {
        const fetchMessages = async () => {
          const { data, error } = await supabase
            .from('messages')
            .select('*')
          if (error) {
            console.error('Failed to fetch messages:', error)
          } else {
            setMessages(data)
          }
        }
        fetchMessages()
      }, [])

      return (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Mensagens</h1>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <ul className="space-y-4">
              {messages.map((message, index) => (
                <li key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">{message.text}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {new Date(message.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
