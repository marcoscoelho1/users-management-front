import Modal from 'react-modal'
import { X } from 'lucide-react'

import './SharedModal.css'

const SharedModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  children,
}: Modal.Props): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      className="SharedModal"
      overlayClassName="SharedModalOverlay"
    >
      <X
        className="absolute top-5 right-5 text-white/50 cursor-pointer"
        onClick={onRequestClose}
      />
      {children}
    </Modal>
  )
}

export default SharedModal
