import RegisterForm from '../../components/RegisterForm'
import ButtonLink from '../../components/ui/ButtonLink'
import DecorLines from '../../components/ui/DecorLines'
import s from './RegisterPage.module.scss'

function RegisterPage() {
  return (
    <div className={s.registerPage}>
      <div className={s.headerBox}>
        <h2 className={s.title}>
          Your medication, delivered Say goodbye to all{' '}
          <span className={s.mark}> your healthcare </span> worries with us
        </h2>
        <div className={s.img}></div>
      </div>
      <RegisterForm />
      <div className={s.linkBox}>
        <ButtonLink to="/login" variant="text" style={{ color: '#1d1e2133' }}>
          Already have an account?
        </ButtonLink>
      </div>
      <div className={s.decor}>
        <DecorLines variant="auth" />
      </div>
    </div>
  )
}

export default RegisterPage
