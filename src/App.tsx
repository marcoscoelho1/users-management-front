import './App.css'
import { ToastContainer } from 'react-toastify'
import Users from '@containers/Users'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Users />
      <ToastContainer />
    </>
  )
}

export default App
