import ButtonLink from '../ui/ButtonLink'
import s from './AuthenticationLinks.module.scss'

interface AuthenticationLinksProps {
  onClose: () => void
}

function AuthenticationLinks({ onClose }: AuthenticationLinksProps) {
  return (
    <div className={s.AuthenticationLinks}>
      <ButtonLink to="register" variant="outlined" onClick={onClose}>
        Register
      </ButtonLink>
      <ButtonLink to="login" variant="text" onClick={onClose}>
        Login
      </ButtonLink>
    </div>
  )
}

export default AuthenticationLinks
