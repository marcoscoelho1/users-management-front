import { User } from '@containers/Users/types'
import { useEffect, useState } from 'react'
import usePutUsers from '@services/usePutUsers'
import usePostSendUserPassword from '@services/usePostSendUserPassword'
import { toast } from 'react-toastify'

const useUserEditModal = (user: User) => {
  const [userForm, setUserForm] = useState(user)

  const { mutate, data: dataPostUsers } = usePutUsers()
  const { mutate: mutateSendPassword, data: dataSendUserPassword } =
    usePostSendUserPassword()

  useEffect(() => {
    if (!dataPostUsers || !dataPostUsers.message) return

    toast.success(dataPostUsers.message, {
      position: 'top-right',
    })
  }, [dataPostUsers])

  useEffect(() => {
    if (!dataSendUserPassword || !dataSendUserPassword.message) return

    toast.success(dataSendUserPassword.message, {
      position: 'top-right',
    })
  }, [dataSendUserPassword])

  const handleChange = (fieldName: string, value: string) => {
    const userChange = { ...userForm }

    userChange[fieldName] = value

    setUserForm(userChange)
  }

  const handleSendPassword = () => {
    mutateSendPassword(user)
  }

  const handleSaveUser = (user: User) => {
    mutate(user)
  }

  return { handleChange, userForm, handleSaveUser, handleSendPassword }
}

export default useUserEditModal
