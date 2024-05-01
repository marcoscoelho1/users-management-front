import UsersList from '@components/UsersList'
import { useUsers } from './users.hooks'
import UserBox from '@components/UserBox'
import UserEditModal from '@components/UserEditModal'
import useGetUsers from '@services/useGetUsers'

const Users = (): JSX.Element => {
  const {
    setSelectedUser,
    selectedUser,
    isUserModalOpen,
    handleShowEditUserModal,
  } = useUsers()

  const { data: usersData } = useGetUsers()

  return (
    <div className="relative bg-gray-800 rounded-lg p-5 gap-3 flex text-white max-w-[1040px] max-h-[80vh] overflow-auto scrollbar m-auto p-[20px]">
      <UsersList users={usersData} handleSelectUser={setSelectedUser} />
      <UserBox
        user={selectedUser}
        handleShowEditUserModal={handleShowEditUserModal}
      />
      {isUserModalOpen && selectedUser && (
        <UserEditModal
          user={selectedUser}
          isOpen={isUserModalOpen}
          onClose={handleShowEditUserModal}
        />
      )}
    </div>
  )
}

export default Users
