import { User } from '@containers/Users/types'
import { useState } from 'react'
import usePutUsers from '@services/usePutUsers'

const useUserEditModal = (user: User) => {
  const [userForm, setUserForm] = useState(user)

  const { mutate } = usePutUsers()

  const handleChange = (fieldName: string, value: string) => {
    const userChange = { ...userForm }

    userChange[fieldName] = value

    setUserForm(userChange)
  }

  const handleSaveUser = (user: User) => {
    mutate(user)
  }

  return { handleChange, userForm, handleSaveUser }
}

export default useUserEditModal
