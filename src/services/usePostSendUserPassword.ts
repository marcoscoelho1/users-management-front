import { useState } from 'react'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { User } from '@containers/Users/types'

interface PutUsersRequest {
  message: string
}

const usePostSendUserPassword = () => {
  const [data, setData] = useState<PutUsersRequest | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const mutate = (user: User) => {
    const mock = new MockAdapter(axios)

    mock.onPost('/users/send_password').reply(200, {
      message: 'Senha enviada com sucesso!',
    })
    setIsLoading(true)
    axios.post('/users/send_password', user).then((response): void => {
      setData(response.data), setIsLoading(false)
    })
  }

  return { data, isLoading, mutate }
}

export default usePostSendUserPassword
