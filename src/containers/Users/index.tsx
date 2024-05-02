import UsersList from '@components/UsersList'
import { useUsers } from './users.hooks'
import UserBox from '@components/UserBox'
import UserEditModal from '@components/UserEditModal'
import { TextInput } from '@shared/TextInput'
import { Search } from 'lucide-react'

const Users = (): JSX.Element => {
  const {
    setSelectedUser,
    selectedUser,
    isUserModalOpen,
    handleShowEditUserModal,
    handleSearchUser,
    usersListData,
  } = useUsers()

  return (
    <div className="relative bg-gray-800 rounded-lg p-5 gap-3 flex text-white max-w-[1040px] max-h-[80vh] overflow-auto scrollbar m-auto p-[20px]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <TextInput.Container>
            <TextInput.Input
              onKeyUp={(event) => {
                handleSearchUser(event.currentTarget.value)
              }}
            />
          </TextInput.Container>
          <Search />
        </div>
        <UsersList users={usersListData} handleSelectUser={setSelectedUser} />
      </div>
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
