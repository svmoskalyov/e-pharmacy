import { CSSProperties, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import s from './SharedLayout.module.scss'

function SharedLayout() {
  const { pathname } = useLocation()
  const place = pathname === '/register' || pathname === '/login' ? true : false

  return (
    <div
      className={s.sharedLayout}
      style={
        { '--footer': `"footer" ${place ? '0' : '334px'}` } as CSSProperties
      }
    >
      <Header />
      <main className={s.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      {!place && <Footer />}
    </div>
  )
}

export default SharedLayout
