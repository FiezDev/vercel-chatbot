'use client'

import React, { useEffect, useState } from 'react'
import useUserStore from '@/app/store/userState'
import { MODELS, PROVIDERS } from '@/components/constants/selector'

export const ChangeModel: React.FC = () => {
  const { user, setModelSelect, setProviderSelect } = useUserStore(state => ({
    user: state.user,
    setModelSelect: state.setModelSelect,
    setProviderSelect: state.setProviderSelect
  }))

  const [modelUse, setModelUse] = useState<string[]>([])

  useEffect(() => {
    const selectedProvider = user.providerSelect || 'OpenAI'
    const models = MODELS[selectedProvider as keyof typeof MODELS]
    setModelUse(models)
  }, [user.providerSelect])

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModelSelect(event.target.value)
  }

  const handleProviderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProviderSelect(event.target.value)
  }

  return (
    <>
      <select
        className="border rounded p-2 w-64"
        value={user.providerSelect}
        onChange={handleProviderChange}
      >
        {PROVIDERS.map((provider, index) => (
          <option key={index} value={provider}>
            {provider}
          </option>
        ))}
      </select>
      <select
        className="border rounded p-2 w-64"
        value={user.modelSelect}
        onChange={handleModelChange}
      >
        {modelUse.map((model, index) => (
          <option key={index} value={model}>
            {model}
          </option>
        ))}
      </select>
    </>
  )
}