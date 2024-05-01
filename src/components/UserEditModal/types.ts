import { User } from '@containers/Users/types'

export interface UserEditModalProps {
  isOpen: boolean
  onClose: () => void
  user: User
}
