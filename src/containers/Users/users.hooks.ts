import { useMemo, useState, useCallback } from 'react'
import { faker } from '@faker-js/faker'
import { User } from '@containers/Users/types'

export const useUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)

  const generatedUsers = useMemo(() => {
    const users = Array.from({ length: 1000 }, () => ({
      id: faker.number.int(),
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      citizenCode: faker.string.numeric(14),
      typeSubscription: 'Plus',
    }))

    return users
  }, [])

  const handleOpenEditUserModal = useCallback(() => {
    setIsUserModalOpen(!isUserModalOpen)
  }, [isUserModalOpen])

  return {
    generatedUsers,
    selectedUser,
    setSelectedUser,
    isUserModalOpen,
    handleOpenEditUserModal,
  }
}
