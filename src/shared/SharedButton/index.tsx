import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const SharedButton = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button
      className="flex justify-center align-center p-2 mt-2 border-solid border-[1px] rounded w-full gap-2 hover:bg-gray-700/50 text-white"
      {...rest}
    >
      {children}
    </button>
  )
}

export default SharedButton
