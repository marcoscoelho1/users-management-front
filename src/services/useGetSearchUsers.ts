import { useState } from 'react'
import { faker } from '@faker-js/faker'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { User } from '@containers/Users/types'

interface FetchParams {
  search: string
}

const useGetSearchUsers = () => {
  const [data, setData] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const clearData = () => {
    setData(null)
  }

  const fetch = ({ search }: FetchParams) => {
    const mock = new MockAdapter(axios)

    mock.onGet('/users/search').reply(
      200,
      Array.from({ length: 1 }, () => ({
        id: faker.number.int(),
        avatar: faker.image.avatar(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        citizenCode: faker.string.numeric(14),
        typeSubscription: 'Plus',
      }))
    )

    const params = new URLSearchParams()
    params.append('search', search)

    setIsLoading(true)
    axios.get('/users/search').then((response) => {
      setData(response.data), setIsLoading(false)
    })
  }

  return { data, isLoading, fetch, clearData }
}

export default useGetSearchUsers
