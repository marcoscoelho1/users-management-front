import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { User } from '@containers/Users/types'

const useGetUsers = () => {
  const [data, setData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const mock = new MockAdapter(axios)

    mock.onGet('/users').reply(
      200,
      Array.from({ length: 1000 }, () => ({
        id: faker.number.int(),
        avatar: faker.image.avatar(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        citizenCode: faker.string.numeric(14),
        typeSubscription: 'Plus',
      }))
    )
    setIsLoading(true)
    axios.get('/users').then((response) => {
      setData(response.data), setIsLoading(false)
    })
  }, [])

  return { data, isLoading }
}

export default useGetUsers
