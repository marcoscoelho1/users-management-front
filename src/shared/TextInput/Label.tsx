import { ElementType } from 'react'

interface LabelProps {
  Icon?: ElementType
  text: string
}

export function Label({ Icon, text }: LabelProps): JSX.Element {
  return (
    <div className="flex gap-2 text-sm text-slate-400 justify-start items-center">
      {Icon && <Icon className="size-[16px]" />}
      {text}
    </div>
  )
}
