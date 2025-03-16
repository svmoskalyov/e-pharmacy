import LoginForm from '../../components/LoginForm'
import ButtonLink from '../../components/ui/ButtonLink'
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
      <div className={s.authBox}>
        <LoginForm />
        <div className={s.linkBox}>
          <ButtonLink
            to="/register"
            variant="text"
            style={{ color: '#1d1e2133' }}
          >
            Don't have an account?
          </ButtonLink>
        </div>
      </div>
      <div className={s.decor}>
        <DecorLines variant="auth" />
      </div>
    </div>
  )
}

export default LoginPage
