import sprite from '../../../assets/icons/sprite.svg'

type IconProps = {
  name: string
  size: string
  color?: string
}

function Icon({ name, size, color = '#fff' }: IconProps) {
  return (
    <svg
      style={{
        width: `${size}`,
        height: `${size}`,
        fill: `${color}`,
        stroke: `${color}`
      }}
    >
      <use href={sprite + `#${name}`} />
    </svg>
  )
}

export default Icon
