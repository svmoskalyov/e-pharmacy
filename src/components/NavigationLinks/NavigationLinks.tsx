import { NavLink } from 'react-router'
import s from './NavigationLinks.module.scss'

type ActiveLink = {
  isActive: boolean
}

interface NavigationLinksProps {
  onClose: () => void
}

const setActive = ({ isActive }: ActiveLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

function NavigationLinks({ onClose }: NavigationLinksProps) {
  return (
    <nav className={s.navLinks}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="home" className={setActive} onClick={onClose}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="medicine-store" className={setActive} onClick={onClose}>
            Medicine store
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="medicine" className={setActive} onClick={onClose}>
            Medicine
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationLinks
