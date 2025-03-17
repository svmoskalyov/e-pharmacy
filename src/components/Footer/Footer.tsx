import { Link } from 'react-router'
import { useAuthStore } from '../../stores/authStore'
import useMediaQuery from '../../hooks/useMediaQuery'
import Logo from '../ui/Logo'
import Icon from '../ui/Icon'
import s from './Footer.module.scss'

function Footer() {
  const { isAuth } = useAuthStore()
  const isTablet = useMediaQuery('(min-width: 768px)')

  return (
    <footer className={s.footer}>
      <div className={s.body}>
        <div className={s.bodyA}>
          <Logo place="home" />
          <p className={s.text}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </div>
        <div className={s.bodyB}>
          <ul className={s.navList}>
            <li>
              <Link to="/home" className={s.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/medicine-store" className={s.navLink}>
                Medicine store
              </Link>
            </li>
            {isAuth && (
              <li>
                <Link to="/medicine" className={s.navLink}>
                  Medicine
                </Link>
              </li>
            )}
          </ul>
          {isTablet && (
            <ul className={s.socialList}>
              <li>
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  className={s.socialLink}
                >
                  <Icon name="facebook" size="28" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  className={s.socialLink}
                >
                  <Icon name="instagram" size="28" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com"
                  target="_blank"
                  className={s.socialLink}
                >
                  <Icon name="youtube" size="28" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <span className={s.line}></span>
      <ul className={s.bottomList}>
        <li className={s.bottomItem}>
          &copy; E-Pharmacy 2023. All Rights Reserved
        </li>
        <li className={s.bottomItem}>
          <Link to="#" className={s.bottomLink}>
            Privacy Policy
          </Link>
        </li>
        <li className={s.bottomItem}>
          <Link to="#" className={s.bottomLink}>
            Terms & Conditions
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
