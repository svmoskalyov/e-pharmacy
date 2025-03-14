import { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import useMediaQuery from '../../hooks/useMediaQuery'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'
import Icon from '../ui/Icon'
import s from './AuthPopup.module.scss'

interface AuthPopupProps {
  onClose: () => void
}

function AuthPopup({ onClose }: AuthPopupProps) {
  const { isAuth } = useAuthStore()
  const [toggleAuth, setToggleAuth] = useState(true)
  const isTablet = useMediaQuery('(min-width: 768px)')

  if (isAuth) onClose()

  const handleToggleAuth = () => {
    setToggleAuth(!toggleAuth)
  }

  return (
    <div className={s.authPopup}>
      <h2 className={s.title}>
        {toggleAuth ? 'Sign Up' : 'Log in to your account'}
      </h2>
      <p className={s.subtitle}>
        {toggleAuth
          ? 'Before proceeding, please register on our site.'
          : 'Please login to your account before continuing.'}
      </p>
      {toggleAuth && (
        <>
          <RegisterForm popup onHandle={handleToggleAuth} />
          <button className={s.btnToggle} onClick={handleToggleAuth}>
            Already have an account?
          </button>
        </>
      )}
      {!toggleAuth && (
        <>
          <LoginForm popup />
          <button className={s.btnToggle} onClick={handleToggleAuth}>
            Don't have an account?
          </button>
        </>
      )}
      <button className={s.btnClose} aria-label="close popup" onClick={onClose}>
        <Icon
          name="close"
          size={isTablet ? '24px' : '20px'}
          color="#000"
          sw="4"
        />
      </button>
    </div>
  )
}

export default AuthPopup
