import { useEffect } from 'react'
import { useNearestPharmaciesStore } from '../../stores/nearestPharmaciesStore.ts'
import SectionWrapper from '../SectionWrapper/SectionWrapper.tsx'
import StoreCard from '../StoreCard/StoreCard.tsx'
import s from './NearestMedicineStore.module.scss'

interface Pharmacie {
  name: string
  address: string
  city: string
  phone: string
  rating: number
  open: boolean
}

function NearestMedicineStore() {
  const nearestPharmacies = useNearestPharmaciesStore(
    state => state.nearestPharmacies
  )
  const fetchNearestPharmacies = useNearestPharmaciesStore(
    state => state.fetchNearestPharmacies
  )

  const getRandomObjects = (arr: Pharmacie[], count: number): Pharmacie[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }
  const randomObjects = getRandomObjects(nearestPharmacies, 6)

  useEffect(() => {
    if (nearestPharmacies.length === 0) fetchNearestPharmacies()
  }, [fetchNearestPharmacies, nearestPharmacies.length])

  return (
    <SectionWrapper>
      <div className={s.nearestMedicineStore}>
        <h2 className={s.title}>Your Nearest Medicine Store</h2>
        <p className={s.subtitle}>
          Search for Medicine, Filter by your location
        </p>
        <div className={s.boxCards}>
          {randomObjects.map((e, i) => (
            <StoreCard key={i} {...e} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default NearestMedicineStore
