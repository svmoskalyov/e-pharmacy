import { Suspense } from "react"
import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default SharedLayout
