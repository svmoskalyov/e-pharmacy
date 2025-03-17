import { useEffect } from 'react'
import MainBanner from '../../components/MainBanner'
import NearestMedicineStore from '../../components/NearestMedicineStore'
import PharmacyPromo from '../../components/PharmacyPromo/PharmacyPromo'
import PromoBanners from '../../components/PromoBanners'
import Reviews from '../../components/Reviews'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <MainBanner />
      <PromoBanners />
      <NearestMedicineStore />
      <PharmacyPromo />
      <Reviews />
    </>
  )
}

export default HomePage
