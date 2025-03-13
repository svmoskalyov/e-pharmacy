import { toast } from 'react-toastify'
import { logoutUser } from '../../services/api'
import { useAuthStore } from '../../stores/authStore'
import Button from '../ui/Button'
import ButtonLink from '../ui/ButtonLink'
import s from './AuthenticationLinks.module.scss'

interface AuthenticationLinksProps {
  onClose: () => void
}

function AuthenticationLinks({ onClose }: AuthenticationLinksProps) {
  const { isAuth } = useAuthStore()

  const handleLogout = async () => {
    const logouted = await logoutUser()
    if (logouted.success) {
      onClose()
      toast.success(logouted.message)
    } else {
      toast.error(logouted.message)
    }
  }

  return (
    <div className={s.authenticationLinks}>
      {isAuth ? (
        <Button variant="outlined" onClick={handleLogout}>
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
            style={{ textDecoration: 'underline' }}
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
