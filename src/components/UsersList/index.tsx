import Pagination from '@shared/Pagination'
import { UsersListProps as Props } from './types'
import { useUsersList } from './usersList.hooks'

const UsersList = ({ users, handleSelectUser }: Props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1)
  }

  const { calcPagination, currentPage, setCurrentPage, pageCount } =
    useUsersList(users.length, 50)
  const [start, end] = calcPagination[currentPage] || [0, 50]

  return (
    <div className="w-3/4 min-h-[600px]">
      <table className="min-w-[692px]">
        <thead className="bg-gray-700 h-[60px]">
          <tr>
            <th className="text-left px-4">id</th>
            <th className="text-left px-4">Nome</th>
            <th className="text-left px-4">email</th>
            <th className="text-left px-4">telefone</th>
            <th className="text-left px-4">Assinatura</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(start, end).map(
            (user, index): JSX.Element => (
              <tr
                key={index}
                className="text-xs h-[60px] text-[#9ca3af] cursor-pointer hover:bg-gray-700/50"
                onClick={() => handleSelectUser(user)}
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
      <Pagination
        forcePage={currentPage - 1}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default UsersList
