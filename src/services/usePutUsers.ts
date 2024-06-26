import { useState } from 'react'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { User } from '@containers/Users/types'

interface PutUsersRequest {
  message: string
  user: User
}

const usePutUsers = () => {
  const [data, setData] = useState<PutUsersRequest | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const mutate = (user: User) => {
    const mock = new MockAdapter(axios)

    mock.onPut('/users').reply(200, {
      user: user,
      message: 'Salvo com sucesso!',
    })
    setIsLoading(true)
    axios.put('/users').then((response): void => {
      setData(response.data), setIsLoading(false)
    })
  }

  return { data, isLoading, mutate }
}

export default usePutUsers
