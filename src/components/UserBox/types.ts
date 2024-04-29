export interface User {
  id: number
  avatar: string
  name: string
  email: string
  phone: string
  typeSubscription: string
}

export interface UserBoxProps {
  user?: User | null
}
