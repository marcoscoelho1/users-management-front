import { ElementType, ReactNode } from 'react'
import { UserBoxProps as Props } from './types'
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
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
          <img
            src={user.avatar}
            className="object-contain w-full h-full"
            alt="avatar do usuario"
          ></img>
        </div>
        <p>{user.name}</p>
        <p>{user.typeSubscription}</p>
      </div>
      <div className="flex flex-col gap-2">
        <UserInfo Icon={Mail} text={user.email} />
        <UserInfo Icon={Phone} text={user.phone} />
        <UserInfo Icon={SquareUser} text={user.citizenCode} />
      </div>
      <button
        onClick={() => handleShowEditUserModal()}
        className="flex justify-center align-center p-2 mt-2 border-solid border-[1px] rounded w-full gap-2 hover:bg-gray-700/50"
      >
        <FilePenLine />
        Editar
      </button>
    </div>
  )
}

export default UserBox
