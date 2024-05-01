import SharedModal from '@shared/SharedModal'
import { UserEditModalProps as Props } from './types'

const UserEditModal = ({ isOpen, onClose, user }: Props): JSX.Element => {
  return (
    <SharedModal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{user.name}</h2>
      <button onClick={() => {}}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </SharedModal>
  )
}

export default UserEditModal
