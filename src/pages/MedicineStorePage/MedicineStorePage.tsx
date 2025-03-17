import { useEffect } from 'react'
import { useMedicinePharmacieStore } from '../../stores/medicinePharmacieStore'
import SectionWrapper from '../../components/SectionWrapper'
import StoreCard from '../../components/StoreCard'
import s from './MedicineStorePage.module.scss'

function MedicineStorePage() {
  const medicinePharmacie = useMedicinePharmacieStore(
    state => state.medicinePharmacie
  )
  const fetchMedicinePharmacie = useMedicinePharmacieStore(
    state => state.fetchMedicinePharmacie
  )

  useEffect(() => {
    if (medicinePharmacie.length === 0) fetchMedicinePharmacie()
  }, [fetchMedicinePharmacie, medicinePharmacie.length])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SectionWrapper>
      <div className={s.medicineStorePage}>
        <h2 className={s.title}>Medicine store</h2>
        <div className={s.boxCards}>
          {medicinePharmacie.map((e, i) => (
            <StoreCard key={i} {...e} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default MedicineStorePage
