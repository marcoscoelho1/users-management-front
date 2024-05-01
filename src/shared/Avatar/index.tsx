import { Camera } from 'lucide-react'

interface AvatarProps {
  src: string | undefined
  isEditable?: boolean
}

const Avatar = ({ src, isEditable = false }: AvatarProps): JSX.Element => {
  return (
    <div className="relative w-[120px] h-[120px] overflow-hidden mx-auto">
      <img
        src={src}
        className="object-contain w-full h-full rounded-full"
        alt="avatar do usuario"
      ></img>
      {isEditable && (
        <button
          onClick={(event) => {
            event.preventDefault()
          }}
          className="bg-slate-800 p-[8px] rounded-full absolute bottom-0 left-0 text-slate-400 border-slate-600 border-solid border-[1px] hover:bg-gray-700"
        >
          <Camera className="size-[16px]" />
        </button>
      )}
    </div>
  )
}

export default Avatar
