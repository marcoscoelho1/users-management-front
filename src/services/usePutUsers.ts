import { useState } from 'react'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { User } from '@containers/Users/types'

const usePutUsers = () => {
  const [data, setData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const mutate = (user: User) => {
    const mock = new MockAdapter(axios)

    mock.onPut('/users').reply(200, {
      user: user,
      message: 'saved with success',
    })
    setIsLoading(true)
    axios.put('/users').then((response): void => {
      console.log('post data', response.data)
      setData(response.data), setIsLoading(false)
    })
  }

  return { data, isLoading, mutate }
}

export default usePutUsers
