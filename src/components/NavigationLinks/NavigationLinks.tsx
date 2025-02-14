import { NavLink } from 'react-router'
import s from './NavigationLinks.module.scss'

type ActiveLink = {
  isActive: boolean
}

const setActive = ({ isActive }: ActiveLink) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`

function NavigationLinks() {
  return (
    <nav className={s.navLinks}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="home" className={setActive}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="medicine-store" className={setActive}>
            Medicine store
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="medicine" className={setActive}>
            Medicine
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationLinks
