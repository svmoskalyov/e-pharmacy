import SectionWrapper from '../../components/SectionWrapper'
import StoreCard from '../../components/StoreCard'
import s from './MedicineStorePage.module.scss'

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

function MedicineStorePage() {
  return (
    <SectionWrapper>
      <div className={s.medicineStorePage}>
        <h2 className={s.title}>Medicine store</h2>
        <div className={s.boxCards}>
          {(stores as Store[]).map((e, i) => (
            <StoreCard key={i} {...e} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default MedicineStorePage
