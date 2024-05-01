//import { useState } from 'react'

import SharedModal from '@shared/SharedModal'
import SharedButton from '@shared/SharedButton'
import useUserEditModal from './userEditModal.hooks'
import Avatar from '@shared/Avatar'
import { UserEditModalProps as Props } from './types'
import {
  Mail,
  Phone,
  UserSquare,
  Save,
  RectangleEllipsis,
  User,
} from 'lucide-react'
import { TextInput } from '@shared/TextInput'

const UserEditModal = ({ isOpen, onClose, user }: Props): JSX.Element => {
  // console.log('userEditModal', user)

  // const [userForm, setUserForm] = useState(user)

  // console.log('userForm', userForm)

  // const handleChange = (fieldName: string, value: string) => {
  //   if (!userForm) return

  //   const userChange = { ...userForm }

  //   userChange[fieldName] = value

  //   setUserForm(userChange)
  // }

  const { userForm, handleChange } = useUserEditModal(user)

  if (!userForm) return <></>

  return (
    <SharedModal isOpen={isOpen} onRequestClose={onClose}>
      <form className="flex flex-col gap-2 py-[16px] min-w-[350px]">
        <Avatar src={userForm.avatar} isEditable={true} />

        <TextInput.Container>
          <TextInput.Label text="Nome" Icon={User} />
          <TextInput.Input
            value={userForm.name}
            onChange={(event) =>
              handleChange('name', event.currentTarget.value)
            }
          />
        </TextInput.Container>
        <TextInput.Container>
          <TextInput.Label text="E-email" Icon={Mail} />
          <TextInput.Input
            value={userForm.email}
            onChange={(event) =>
              handleChange('email', event.currentTarget.value)
            }
          />
        </TextInput.Container>
        <TextInput.Container>
          <TextInput.Label text="Telefone" Icon={Phone} />
          <TextInput.Input value={userForm.phone} />
        </TextInput.Container>
        <TextInput.Container>
          <TextInput.Label text="CPF" Icon={UserSquare} />
          <TextInput.Input value={userForm.citizenCode} />
        </TextInput.Container>
        <SharedButton onClick={() => {}}>
          <Save />
          Salvar
        </SharedButton>

        <SharedButton onClick={() => {}}>
          <RectangleEllipsis />
          Reenviar Senha
        </SharedButton>
      </form>
    </SharedModal>
  )
}

export default UserEditModal
