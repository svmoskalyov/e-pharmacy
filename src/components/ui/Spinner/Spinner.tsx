import s from './Spinner.module.scss'

function Spinner() {
  return (
    <div className={s.spinner}>
      <div className={s.sq1}></div>
      <div className={s.sq2}></div>
    </div>
  )
}

export default Spinner
