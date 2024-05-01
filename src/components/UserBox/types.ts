import { User } from '@containers/Users/types'

export interface UserBoxProps {
  user?: User | null
  handleOpenEditUserModal: () => void
}
