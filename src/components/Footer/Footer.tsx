import { Link } from 'react-router'
import Logo from '../ui/Logo'
import Icon from '../ui/Icon'
import s from './Footer.module.scss'

function Footer() {
  const mobile = true

  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <Logo place="home" />
        <p className={s.text}>
          Get the medicine to help you feel better, get back to your active
          life, and enjoy every moment.
        </p>
      </div>

      <div className={s.footerBody}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link to="/home" className={s.navLink}>
              Home
            </Link>
          </li>
          <li className={s.navItem}>
            <Link to="/medicine-store" className={s.navLink}>
              Medicine store
            </Link>
          </li>
          <li className={s.navItem}>
            <Link to="/medicine" className={s.navLink}>
              Medicine
            </Link>
          </li>
        </ul>

        {!mobile && (
          <ul className={s.socialList}>
            <li className={s.socialItem}>
              <Link to="#" className={s.socialLink}>
                <Icon name="facebook" size="28" />
              </Link>
            </li>
            <li className={s.socialItem}>
              <Link to="#" className={s.socialLink}>
                <Icon name="instagram" size="28" />
              </Link>
            </li>
            <li className={s.socialItem}>
              <Link to="#" className={s.socialLink}>
                <Icon name="youtube" size="28" />
              </Link>
            </li>
          </ul>
        )}
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
