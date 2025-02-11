import sprite from '../../../assets/icons/sprite.svg'

type IconProps = {
  name: string
  size: string
  fill?: string
}

function Icon({ name, size, fill='inherit' }: IconProps) {
  return (
    <svg
      className={s.icon}
      style={{
        width: `${size}`,
        height: `${size}`,
        fill: `${fill}`,
      }}
    >
      <use href={sprite + `#${name}`} />
    </svg>
  )
}

export default Icon
