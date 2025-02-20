import s from './Avatar.module.scss'

interface AvatarProps {
  name: string
  size?: string
  fs?: string
}

function Avatar({ name, size = '40', fs = '14' }: AvatarProps) {
  return (
    <div
      className={s.avatar}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <span className={s.name} style={{ fontSize: `${fs}px` }}>
        {name[0]}
      </span>
    </div>
  )
}

export default Avatar
