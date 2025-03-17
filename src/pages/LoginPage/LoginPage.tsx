import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuthStore } from '../../stores/authStore'
import LoginForm from '../../components/LoginForm'
import ButtonLink from '../../components/ui/ButtonLink'
import DecorLines from '../../components/ui/DecorLines'
import s from './LoginPage.module.scss'

function LoginPage() {
  const { error } = useAuthStore()

  const createErrorMessage = (error: string) => {
    if (`${error}` === 'Firebase: Error (auth/too-many-requests).') {
      toast.error('Too many requests.')
    } else if (
      `${error}` === 'Firebase: Error (auth/network-request-failed).'
    ) {
      toast.error('Problem with network')
    } else if (
      `${error}` === 'Firebase: Error (auth/invalid-login-credentials).'
    ) {
      toast.error('Email or password is not correct')
    } else if (`${error}` === 'Firebase: Error (auth/invalid-credential).') {
      toast.error('User not found')
    } else {
      console.log(error)
    }
    return error
  }

  useEffect(() => {
    if (error) {
      createErrorMessage(error)
    }
  }, [error])

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
