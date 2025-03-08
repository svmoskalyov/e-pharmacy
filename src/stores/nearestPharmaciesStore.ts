import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { fetchData } from '../services/api'

interface Pharmacie {
  name: string
  address: string
  city: string
  phone: string
  rating: number
  open: boolean
}

interface NearestPharmaciesStore {
  nearestPharmacies: Pharmacie[]
  fetchNearestPharmacies: () => Promise<void>
}

export const useNearestPharmaciesStore = create<NearestPharmaciesStore>()(
  persist(
    set => ({
      nearestPharmacies: [],
      fetchNearestPharmacies: async () => {
        const nearestPharmacies = await fetchData<Pharmacie>(
          'nearest_pharmacies'
        )
        set({ nearestPharmacies })
      }
    }),
    {
      name: 'nearest_pharmacies-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        nearestPharmacies: state.nearestPharmacies
      })
    }
  )
)
