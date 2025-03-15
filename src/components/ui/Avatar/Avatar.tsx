import s from './Avatar.module.scss'

interface AvatarProps {
  name: string
  size?: string
  fs?: string
  placeHome?: boolean
}

function Avatar({ name, size = '40', fs = '14', placeHome }: AvatarProps) {
  return (
    <div
      className={placeHome ? `${s.avatar} ${s.muted}` : `${s.avatar}`}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <span
        className={placeHome ? `${s.name} ${s.muted}` : `${s.name}`}
        style={{ fontSize: `${fs}px` }}
      >
        {name[0]}
      </span>
    </div>
  )
}

export default Avatar
