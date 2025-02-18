import s from './DecorLines.module.scss'

function DecorLines() {
  return (
    <div className={s.decorLines}>
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </div>
  )
}

export default DecorLines
