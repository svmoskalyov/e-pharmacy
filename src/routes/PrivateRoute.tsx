import { FC } from 'react'
import { Navigate } from 'react-router'

interface PrivateRouteProps {
  component: FC
}

export function PrivateRoute({ component: Component }: PrivateRouteProps) {
  const isAuth = false
  return !isAuth ? <Navigate to="/" /> : <Component />
}
