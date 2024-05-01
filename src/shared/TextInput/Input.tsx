import { InputHTMLAttributes } from 'react'

export function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <input
      type="text"
      className="bg-transparent text-[#9ca3af] border-solid border-[1px] rounded-sm h-[36px] pl-[8px] border-slate-700"
      {...rest}
    />
  )
}
