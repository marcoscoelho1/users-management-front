import { User } from '@containers/Users/types'

export interface UsersListProps {
  users: User[]
  handleSelectUser: (user: User) => void
}
