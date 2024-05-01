export interface User {
  id: number
  avatar: string
  name: string
  email: string
  phone: string
  typeSubscription: string
  citizenCode: string
  [key: string]: string | number
}
