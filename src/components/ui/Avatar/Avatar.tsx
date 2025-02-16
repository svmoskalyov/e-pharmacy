import s from './Avatar.module.scss'

interface AvatarProps {
  name: string
}

function Avatar({ name }: AvatarProps) {
  return <div className={s.avatar}>{name[0]}</div>
}

export default Avatar
