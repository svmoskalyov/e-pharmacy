import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuthStore } from '../../stores/authStore'
import RegisterForm from '../../components/RegisterForm'
import ButtonLink from '../../components/ui/ButtonLink'
import DecorLines from '../../components/ui/DecorLines'
import s from './RegisterPage.module.scss'

function RegisterPage() {
  const { error } = useAuthStore()

  const createErrorMessage = (error: string) => {
    if (`${error}` === 'Firebase: Error (auth/too-many-requests).') {
      toast.error('Too many requests.')
    } else if (
      `${error}` === 'Firebase: Error (auth/network-request-failed).'
    ) {
      toast.error('Problem with network')
    } else if (`${error}` === 'Firebase: Error (auth/email-already-in-use).') {
      toast.error('Email already exists')
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
    <div className={s.registerPage}>
      <div className={s.headerBox}>
        <h2 className={s.title}>
          Your medication, delivered Say goodbye to all{' '}
          <span className={s.mark}> your healthcare </span> worries with us
        </h2>
        <div className={s.img}></div>
      </div>
      <div className={s.authBox}>
        <RegisterForm />
        <div className={s.linkBox}>
          <ButtonLink to="/login" variant="text" style={{ color: '#1d1e2133' }}>
            Already have an account?
          </ButtonLink>
        </div>
      </div>
      <div className={s.decor}>
        <DecorLines variant="auth" />
      </div>
    </div>
  )
}

export default RegisterPage
