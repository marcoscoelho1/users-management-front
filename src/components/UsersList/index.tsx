import UserBox from '@components/UserBox'
import { useUsersList } from './userslist.hooks'

const UsersList = (): JSX.Element => {
  const { generatedUsers, selectedUser, setSelectedUser } = useUsersList()

  const users = generatedUsers

  return (
    <div className="bg-gray-900 rounded-lg p-16 flex text-white ">
      <div className="w-3/4">
        <table>
          <thead className="bg-gray-700 h-[60px]">
            <th className="text-left px-4">id</th>
            <th className="text-left px-4">Nome</th>
            <th className="text-left px-4">email</th>
            <th className="text-left px-4">telefone</th>
            <th className="text-left px-4">Tipo Assinatura</th>
          </thead>
          <tbody>
            {users.map(
              (user, index): JSX.Element => (
                <tr
                  key={index}
                  className="text-xs h-[60px] text-[#9ca3af] cursor-pointer hover:bg-gray-700/50"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="text-left px-4">{user.id}</td>
                  <td className="text-left px-4">{user.name}</td>
                  <td className="text-left px-4">{user.email}</td>
                  <td className="text-left px-4">{user.phone}</td>
                  <td className="text-left px-4">{user.typeSubscription}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <UserBox user={selectedUser} />
    </div>
  )
}

export default UsersList
