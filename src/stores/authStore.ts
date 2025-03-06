import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface User {
  uid: string
  name: string
  email: string
  phone: string
}

interface AuthState {
  user: User | null
  isAuth: boolean
  isLoading: boolean
  error: string | null
  setUser: (user: User | null) => void
  setIsAuth: (isAuth: boolean) => void
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isAuth: false,
      isLoading: false,
      error: null,
      setUser: user => set({ user }),
      setIsAuth: isAuth => set({ isAuth }),
      setIsLoading: isLoading => set({ isLoading }),
      setError: error => set({ error })
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        user: state.user
      })
    }
  )
)
