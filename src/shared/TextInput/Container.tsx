import { ReactNode } from 'react'

interface Container {
  children: ReactNode
}

export function Container({ children }: Container): JSX.Element {
  return <div className="flex flex-col gap-2">{children}</div>
}
