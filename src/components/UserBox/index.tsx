import { ElementType, ReactNode } from 'react'
import { UserBoxProps as Props } from './types'
import SharedButton from '@shared/SharedButton'
import Avatar from '@shared/Avatar'
import { Mail, Phone, SquareUser, FilePenLine } from 'lucide-react'

interface UserInfoProps {
  Icon: ElementType
  text: string
}

const UserInfo = ({ Icon, text }: UserInfoProps): ReactNode => (
  <div className="flex gap-2 text-sm">
    <Icon />
    {text}
  </div>
)

const UserBox = ({ user, handleShowEditUserModal }: Props): JSX.Element => {
  if (!user) {
    return (
      <div className="sticky top-0 w-1/4">
        <div className="flex flex-col gap-2 justify-center items-center">
          No data
        </div>
      </div>
    )
  }

  return (
    <div className="sticky top-0 w-1/4 min-w-[242px]">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Avatar src={user.avatar} />

        <p className="w-full text-center">{user.name}</p>
        <p className="w-full text-center">{user.typeSubscription}</p>
      </div>
      <div className="flex flex-col gap-2 text-slate-400">
        <UserInfo Icon={Mail} text={user.email} />
        <UserInfo Icon={Phone} text={user.phone} />
        <UserInfo Icon={SquareUser} text={user.citizenCode} />
      </div>
      <SharedButton onClick={() => handleShowEditUserModal()}>
        <FilePenLine />
        Editar
      </SharedButton>
    </div>
  )
}

export default UserBox
