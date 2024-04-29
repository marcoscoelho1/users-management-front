import { useMemo, useState } from 'react'
import { faker } from '@faker-js/faker'
import { User } from '@components/UserBox/types'

export const useUsersList = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const generatedUsers = useMemo(() => {
    const users = Array.from({ length: 1000 }, () => ({
      id: faker.number.int(),
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      typeSubscription: 'Plus',
    }))

    return users
  }, [])

  return { generatedUsers, selectedUser, setSelectedUser }
}
