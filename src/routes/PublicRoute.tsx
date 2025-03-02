import { FC } from 'react'
import { Navigate } from 'react-router'

interface PublicRouteProps {
  component: FC
}

export function PublicRoute({ component: Component }: PublicRouteProps) {
  const isAuth = false
  return isAuth ? <Navigate to="/" /> : <Component />
}
