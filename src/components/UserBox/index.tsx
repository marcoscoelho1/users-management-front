import { UserBoxProps as Props } from './types'

const UserBox = ({ user }: Props): JSX.Element => {
  if (!user) {
    return <div>No data</div>
  }

  return (
    <div className="w-1/4">
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
      <div></div>
    </div>
  )
}

export default UserBox
