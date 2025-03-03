import s from './DecorLines.module.scss'

interface DecorLinesProps {
  variant: 'card' | 'auth'
}

function DecorLines({ variant }: DecorLinesProps) {
  return (
    <div className={`${s.decorLines} ${s[variant]}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default DecorLines
