import Button from '../ui/Button'
import ButtonLink from '../ui/ButtonLink'
import s from './AuthenticationLinks.module.scss'

interface AuthenticationLinksProps {
  onClose: () => void
}

function AuthenticationLinks({ onClose }: AuthenticationLinksProps) {
  const isAuth = false

  const handlerLogOut = () => {
    console.log('Log out')
    onClose()
  }

  return (
    <div className={s.AuthenticationLinks}>
      {isAuth ? (
        <Button variant="outlined" onClick={handlerLogOut}>
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
