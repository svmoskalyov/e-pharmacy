import { Navigate, Route, Routes } from 'react-router'
import SharedLayout from './layouts/SharedLayout'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import MedicineStorePage from './pages/MedicineStorePage'
import MedicinePage from './pages/MedicinePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="medicine-store" element={<MedicineStorePage />} />
        <Route path="medicine" element={<MedicinePage />} />
        <Route path="product/:prodId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
