'use client'

import React from 'react'
import useUserStore from '@/app/store/userState'

export function ProviderDropdown() {
  const { user, setProviderSelect } = useUserStore(state => ({
    user: state.user,
    setProviderSelect: state.setProviderSelect
  }))

  const Providers = ['OpenAI', 'Anthropic']

  const handleProviderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProviderSelect(event.target.value)
  }

  return (
    <select
      className="border rounded p-2 w-64"
      value={user.providerSelect}
      defaultValue={user.providerSelect ?? 'OpenAI'}

      onChange={handleProviderChange}
    >
      {Providers.map((provider, index) => (
        <option key={index} value={provider}>
          {provider}
        </option>
      ))}
    </select>
  )
}
