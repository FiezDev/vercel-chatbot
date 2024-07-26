'use client'

import React from 'react'
import useUserStore from '@/app/store/userState'

export function ModelDropdown() {
  const { user, setModelSelect } = useUserStore(state => ({
    user: state.user,
    setModelSelect: state.setModelSelect
  }))

  const MODELS: Record<string, string[]> = {
    OpenAI: [
      'gpt-4',
      'gpt-4o',
      'gpt-3.5-turbo',
      'gpt-4o-2024-05-13',
      'gpt-4-turbo',
      'gpt-4-turbo-2024-04-09',
      'gpt-4-turbo-preview',
      'gpt-4-0125-preview',
      'gpt-4-1106-preview',
      'gpt-4-vision-preview',
      'gpt-4-0613',
      'gpt-4-32k',
      'gpt-4-32k-0613',
      'gpt-3.5-turbo-0125',
      'gpt-3.5-turbo-1106',
      'gpt-3.5-turbo-16k',
      'gpt-3.5-turbo-0613',
      'gpt-3.5-turbo-16k-0613'
    ],
    Anthropic: [
      'claude-3-5-sonnet-20240620',
      'claude-3-opus-20240229',
      'claude-3-sonnet-20240229',
      'claude-3-haiku-20240307'
    ]
  }

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModelSelect(event.target.value)
  }

  const selectedProvider = user.providerSelect || 'OpenAI'
  const models = MODELS[selectedProvider as keyof typeof MODELS]

  return (
    <select
      className="border rounded p-2 w-64"
      value={user.modelSelect}
      defaultValue={user.providerSelect !== 'OpenAI'? 'gpt-3.5-turbo' : 'claude-3-haiku-20240307'}
      onChange={handleModelChange}
    >
      {models.map((model, index) => (
        <option key={index} value={model}>
          {model}
        </option>
      ))}
    </select>
  )
}
