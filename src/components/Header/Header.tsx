import { CSSProperties, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useAuthStore } from '../../stores/authStore'
import { useCartStore } from '../../stores/cartStore'
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
  const [amount, setAmount] = useState(0)
  const { pathname } = useLocation()
  const { isAuth } = useAuthStore()
  const { cart } = useCartStore()

  let place = ''
  const toggleDrawer = () => setIsOpen(!isOpen)

  if (pathname === '/' || pathname === '/home') {
    place = 'home'
  } else if (pathname === '/register' || pathname === '/login') {
    place = 'auth'
  }

  useEffect(() => {
    if (cart.length === 0) return
    const newAmount = cart.reduce(
      (total, product) => total + product.buyCount,
      0
    )
    setAmount(newAmount)
  }, [cart])

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
          {isAuth && place !== 'home' && (
            <>
              <Cart count={amount} />
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
