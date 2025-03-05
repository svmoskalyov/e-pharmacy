import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface User {
  uid: string
  name: string
  email: string
  password: string
  phoneNumber: string
}

interface AuthState {
  user: User | null
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
  setUser: (user: User | null) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  error: string | null
  setError: (error: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isAuth: false,
      setUser: user => set({ user }),
      setIsAuth: isAuth => set({ isAuth }),
      isLoading: false,
      setIsLoading: isLoading => set({ isLoading }),
      error: null,
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
