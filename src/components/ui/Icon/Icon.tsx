import sprite from '../../../assets/icons/sprite.svg'

type IconProps = {
  name: string
  size: string
  color?: string
  rotate?: string
}

function Icon({ name, size, color = '#fff', rotate = '0' }: IconProps) {
  return (
    <svg
      style={{
        width: `${size}`,
        height: `${size}`,
        fill: `${color}`,
        stroke: `${color}`,
        rotate: `${rotate}deg`
      }}
    >
      <use href={sprite + `#${name}`} />
    </svg>
  )
}

export default Icon
