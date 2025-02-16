import { useState } from 'react'
import { useLocation } from 'react-router'
import Logo from '../ui/Logo'
import Icon from '../ui/Icon'
import Drawer from '../Drawer'
import NavigationLinks from '../NavigationLinks'
import AuthenticationLinks from '../AuthenticationLinks'
import s from './Header.module.scss'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  let place = ''
  const toggleDrawer = () => setIsOpen(!isOpen)

  if (location.pathname === '/' || location.pathname === '/home') {
    place = 'home'
  }

  return (
    <>
      <header
        className={s.header}
        style={
          {
            backgroundColor: place === 'home' ? 'var(--accent)' : 'inherit'
          } as React.CSSProperties
        }
      >
        <Logo place={place} />
        <button aria-label="drawer open" onClick={toggleDrawer}>
          <Icon
            name="burger"
            size="32px"
            color={place === 'home' ? 'var(--text-secondary)' : 'var(--accent)'}
          />
        </button>
      </header>

      <Drawer isOpen={isOpen} onClose={toggleDrawer}>
        <NavigationLinks onClose={toggleDrawer} />
        <AuthenticationLinks onClose={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default Header
