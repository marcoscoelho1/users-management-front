import UsersList from '@components/UsersList'
import { useUsers } from './users.hooks'
import UserBox from '@components/UserBox'
import UserEditModal from '@components/UserEditModal'

const Users = (): JSX.Element => {
  const {
    generatedUsers,
    setSelectedUser,
    selectedUser,
    isUserModalOpen,
    handleShowEditUserModal,
  } = useUsers()

  return (
    <div className="relative bg-gray-800 rounded-lg p-5 gap-3 flex text-white max-w-[1040px] max-h-[80vh] overflow-auto scrollbar m-auto p-[20px]">
      <UsersList users={generatedUsers} handleSelectUser={setSelectedUser} />
      <UserBox
        user={selectedUser}
        handleShowEditUserModal={handleShowEditUserModal}
      />
      {selectedUser && (
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
