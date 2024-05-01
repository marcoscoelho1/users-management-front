import { User } from '@containers/Users/types'
import { useState } from 'react'

const useUserEditModal = (user: User) => {
  const [userForm, setUserForm] = useState(user)

  const handleChange = (fieldName: string, value: string) => {
    console.log('chegando aqui', value)

    const userChange = { ...userForm }

    userChange[fieldName] = value

    setUserForm(userChange)
  }

  return { handleChange, userForm }
}

export default useUserEditModal
