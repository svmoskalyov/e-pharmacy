import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { fetchData } from '../services/api'

interface MedicinePharmacie {
  name: string
  rating: number
  address: string
  phone: string
  open: boolean
  website?: string
}

interface MedicinePharmacieStore {
  medicinePharmacie: MedicinePharmacie[]
  fetchMedicinePharmacie: () => Promise<void>
}

export const useMedicinePharmacieStore = create<MedicinePharmacieStore>()(
  persist(
    set => ({
      medicinePharmacie: [],
      fetchMedicinePharmacie: async () => {
        const medicinePharmacie = await fetchData<MedicinePharmacie>(
          'pharmacies'
        )
        set({ medicinePharmacie })
      }
    }),
    {
      name: 'pharmacies-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        medicinePharmacie: state.medicinePharmacie
      })
    }
  )
)
