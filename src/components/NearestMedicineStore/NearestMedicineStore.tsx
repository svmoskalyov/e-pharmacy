import StoreCard from '../StoreCard/StoreCard.tsx'
import s from './NearestMedicineStore.module.scss'

const stores = [
  {
    name: 'Wellness Pharma',
    address: 'Reitarska St, 17',
    city: 'Kyiv',
    phone: '045-256-9564',
    rating: 2,
    open: true
  },
  {
    name: 'Family Drugstore',
    address: 'Petra Sahaidachnoho St, 32',
    city: 'Kyiv',
    phone: '045-416-3199',
    rating: 1,
    open: true
  },
  {
    name: 'Bright Health Pharmacy',
    address: 'Mezhyhirska St, 17',
    city: 'Kyiv',
    phone: '050-858-9718',
    rating: 1,
    open: false
  },
  {
    name: 'Bright Health Pharmacy',
    address: 'Vozdvyzhenka St, 8',
    city: 'Kyiv',
    phone: '045-403-6079',
    rating: 1,
    open: false
  },
  {
    name: 'Green Cross Pharmacy',
    address: 'Reitarska St, 8',
    city: 'Kyiv',
    phone: '048-623-5168',
    rating: 1,
    open: true
  },
  {
    name: 'MediServe Pharmacy',
    address: 'Velyka Vasylkivska St, 34',
    city: 'Kyiv',
    phone: '050-381-2329',
    rating: 5,
    open: true
  },
  {
    name: 'Green Cross Pharmacy',
    address: 'Reitarska St, 2',
    city: 'Kyiv',
    phone: '067-278-1856',
    rating: 1,
    open: false
  },
  {
    name: 'Bright Health Pharmacy',
    address: 'Vozdvyzhenka St, 19',
    city: 'Kyiv',
    phone: '048-947-8907',
    rating: 4,
    open: false
  },
  {
    name: 'Healthline Chemists',
    address: 'Mezhyhirska St, 13',
    city: 'Kyiv',
    phone: '044-284-5317',
    rating: 4,
    open: true
  }
]

interface Store {
  name: string
  address: string
  city: string
  phone: string
  rating: number
  open: boolean
}

function NearestMedicineStore() {
  const getRandomObjects = (arr: Store[], count: number): Store[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }
  const randomObjects = getRandomObjects(stores, 6)

  return (
    <div className={s.nearestMedicineStore}>
      <h2 className={s.title}>Your Nearest Medicine Store</h2>
      <p className={s.subtitle}>Search for Medicine, Filter by your location</p>
      <div className={s.boxCards}>
        {randomObjects.map((e, i) => (
          <StoreCard key={i} {...e} />
        ))}
      </div>
    </div>
  )
}

export default NearestMedicineStore
