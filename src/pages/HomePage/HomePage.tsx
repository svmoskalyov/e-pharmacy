import MainBanner from '../../components/MainBanner'
import NearestMedicineStore from '../../components/NearestMedicineStore'
import PharmacyPromo from '../../components/PharmacyPromo/PharmacyPromo'
import PromoBanners from '../../components/PromoBanners'
import Reviews from '../../components/Reviews'
import s from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={s.homePage}>
      <MainBanner />
      <PromoBanners />
      <NearestMedicineStore />
      <PharmacyPromo />
      <Reviews />
    </div>
  )
}

export default HomePage
