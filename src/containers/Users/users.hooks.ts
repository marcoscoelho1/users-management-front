import { useState, useCallback } from 'react'

import { User } from '@containers/Users/types'

export const useUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)

  const handleShowEditUserModal = useCallback(() => {
    setIsUserModalOpen(!isUserModalOpen)
  }, [isUserModalOpen])

  return {
    selectedUser,
    setSelectedUser,
    isUserModalOpen,
    handleShowEditUserModal,
  }
}
