import { useState, useCallback, useEffect } from 'react'

import { User } from '@containers/Users/types'
import useGetSearchUsers from '@services/useGetSearchUsers'
import useGetUsers from '@services/useGetUsers'

export const useUsers = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let searchTimer: any = undefined
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [usersListData, setUsersListData] = useState<User[]>([])

  const {
    fetch: fetchSearchUser,
    data: searchUsersData,
    clearData: clearSearchData,
  } = useGetSearchUsers()
  const { data: usersData } = useGetUsers()

  useEffect((): void => {
    if (searchUsersData) {
      setUsersListData(searchUsersData)
      return
    }

    setUsersListData(usersData)
  }, [usersData, searchUsersData])

  const handleShowEditUserModal = useCallback(() => {
    setIsUserModalOpen(!isUserModalOpen)
  }, [isUserModalOpen])

  const handleSearchUser = (searchText: string): void => {
    if (searchTimer) {
      clearTimeout(searchTimer)
    }

    searchTimer = setTimeout(() => {
      if (searchText.length < 2) {
        clearSearchData()
        return
      }

      fetchSearchUser({ search: searchText })
    }, 300)
  }

  return {
    selectedUser,
    setSelectedUser,
    isUserModalOpen,
    handleShowEditUserModal,
    handleSearchUser,
    usersListData,
  }
}
