import { CSSProperties, useState } from 'react'
import { useLocation } from 'react-router'
import Logo from '../ui/Logo'
import Icon from '../ui/Icon'
import Drawer from '../Drawer'
import NavigationLinks from '../NavigationLinks'
import AuthenticationLinks from '../AuthenticationLinks'
import Avatar from '../ui/Avatar'
import Cart from '../ui/Cart'
import s from './Header.module.scss'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  let place = ''
  const toggleDrawer = () => setIsOpen(!isOpen)
  const isAuth = false

  if (pathname === '/' || pathname === '/home') {
    place = 'home'
  } else if (pathname === '/register' || pathname === '/login') {
    place = 'auth'
  }

  return (
    <>
      <header
        className={s.header}
        style={
          {
            backgroundColor: place === 'home' ? 'var(--accent)' : 'inherit'
          } as CSSProperties
        }
      >
        <Logo place={place} />

        <div className={s.actions}>
          {isAuth && (
            <>
              <Cart count={0} />
              <Avatar name="John Doe" />
            </>
          )}
          {place !== 'auth' && (
            <button aria-label="drawer open" onClick={toggleDrawer}>
              <Icon
                name="burger"
                size="32px"
                color={
                  place === 'home' ? 'var(--text-secondary)' : 'var(--accent)'
                }
              />
            </button>
          )}
        </div>
      </header>

      <Drawer isOpen={isOpen} onClose={toggleDrawer}>
        <NavigationLinks onClose={toggleDrawer} />
        <AuthenticationLinks onClose={toggleDrawer} />
      </Drawer>
    </>
  )
}

export default Header
