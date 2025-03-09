import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { fetchData } from '../services/api'

type ReviewsObject = {
  name: string
  rating: number
  createdAt: string
  comment: string
}

interface Product {
  id: string
  photo: string
  name: string
  suppliers: string
  stock: string
  price: string
  category: string
  description: string
  reviews: ReviewsObject[]
}

interface ProductStore {
  products: Product[]
  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductStore>()(
  persist(
    set => ({
      products: [],
      fetchProducts: async () => {
        const products = await fetchData<Product>('products')
        set({ products })
      }
    }),
    {
      name: 'products-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        products: state.products
      })
    }
  )
)
