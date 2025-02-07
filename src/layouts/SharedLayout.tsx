import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import s from './SharedLayout.module.scss'

function SharedLayout() {
  return (
    <div className={s.sharedLayout}>
      <Header />
      <main className={s.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default SharedLayout
