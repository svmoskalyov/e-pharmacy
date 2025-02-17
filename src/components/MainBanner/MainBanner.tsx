import s from './MainBanner.module.scss'

function MainBanner() {
  return (
    <div className={s.mainBanner}>
      <div className={s.box}>
        <h1 className={s.title}>Your medication delivered</h1>
        <p className={s.subtitle}>
          Say goodbye to all your healthcare worries with us
        </p>
      </div>
    </div>
  )
}

export default MainBanner
