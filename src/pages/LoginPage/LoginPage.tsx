import LoginForm from '../../components/LoginForm'
import DecorLines from '../../components/ui/DecorLines'
import s from './LoginPage.module.scss'

function LoginPage() {
  return (
    <div className={s.loginPage}>
      <div className={s.headerBox}>
        <h2 className={s.title}>
          Your medication, delivered Say goodbye to all{' '}
          <span className={s.mark}> your healthcare </span> worries with us
        </h2>
        <div className={s.img}></div>
      </div>
      <LoginForm />
      <div className={s.decor}>
        <DecorLines variant="auth" />
      </div>
    </div>
  )
}

export default LoginPage
