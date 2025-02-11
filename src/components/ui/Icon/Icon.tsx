import sprite from '../../../assets/icons/sprite.svg'

type IconTypes = {
  name: string
  size: string
  fill?: string
}

function Icon({ name, size, fill='inherit' }: IconTypes) {
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
