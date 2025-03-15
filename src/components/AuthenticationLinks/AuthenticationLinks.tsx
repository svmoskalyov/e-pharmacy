import { toast } from 'react-toastify'
import { logoutUser } from '../../services/api'
import { useAuthStore } from '../../stores/authStore'
import useMediaQuery from '../../hooks/useMediaQuery'
import Button from '../ui/Button'
import ButtonLink from '../ui/ButtonLink'
import s from './AuthenticationLinks.module.scss'

interface AuthenticationLinksProps {
  placeHome?: boolean
  onClose?: () => void
}

function AuthenticationLinks({ placeHome, onClose }: AuthenticationLinksProps) {
  const { isAuth } = useAuthStore()
  const isDesktop = useMediaQuery('(min-width: 1440px)')

  const handleLogout = async () => {
    const logouted = await logoutUser()
    if (logouted.success) {
      onClose?.()
      toast.success(logouted.message)
    } else {
      toast.error(logouted.message)
    }
  }

  return (
    <div className={s.authenticationLinks}>
      {isAuth ? (
        <Button
          variant={placeHome ? 'outlined' : 'outlined-muted'}
          size="large"
          onClick={handleLogout}
        >
          Log out
        </Button>
      ) : (
        <>
          <ButtonLink to="register" variant="outlined" onClick={onClose}>
            Register
          </ButtonLink>
          <ButtonLink
            to="login"
            variant="text"
            style={{
              textDecoration: 'underline',
              color:
                isDesktop && placeHome
                  ? 'var(--text-secondary)'
                  : 'var(--accent)'
            }}
            onClick={onClose}
          >
            Login
          </ButtonLink>
        </>
      )}
    </div>
  )
}

export default AuthenticationLinks
