import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { fetchData } from '../services/api'

interface Review {
  name: string
  testimonial: string
}

interface ReviewStore {
  reviews: Review[]
  fetchReviews: () => Promise<void>
}

export const useReviewStore = create<ReviewStore>()(
  persist(
    set => ({
      reviews: [],
      fetchReviews: async () => {
        const reviews = await fetchData<Review>('reviews')
        set({ reviews })
      }
    }),
    {
      name: 'reviews-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        reviews: state.reviews
      })
    }
  )
)
