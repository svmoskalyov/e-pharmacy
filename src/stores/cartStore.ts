import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface Product {
  id: string
  photo: string
  name: string
  suppliers: string
  price: string
  stock: string
  buyCount: number
}

interface CartStore {
  cart: Product[] | []
  setCart: (cart: Product[]) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    set => ({
      cart: [],
      setCart: cart => set({ cart })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        cart: state.cart
      })
    }
  )
)
