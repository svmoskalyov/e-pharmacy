import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { useAuthStore } from './stores/authStore'
import SharedLayout from './layouts/SharedLayout'
import HomePage from './pages/HomePage'

const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const MedicineStorePage = lazy(() => import('./pages/MedicineStorePage'))
const MedicinePage = lazy(() => import('./pages/MedicinePage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const CartPage = lazy(() => import('./pages/CartPage'))

function App() {
  const { isAuth } = useAuthStore()

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="medicine-store" element={<MedicineStorePage />} />
          <Route path="product/:prodId" element={<ProductPage />} />
          {isAuth && <Route path="medicine" element={<MedicinePage />} />}
          {isAuth && <Route path="cart" element={<CartPage />} />}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
