import Features from '../Features'
import SectionWrapper from '../SectionWrapper'
import ButtonLink from '../ui/ButtonLink'
import s from './PharmacyPromo.module.scss'

function PharmacyPromo() {
  return (
    <>
      <SectionWrapper>
        <div className={s.pharmacyPromo}>
          <div className={s.content}>
            <h2 className={s.title}>Add the medicines you need online now</h2>
            <p className={s.text}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
            <ButtonLink
              to={'/medicine-store'}
              variant={'outlined'}
              style={{ width: '154px' }}
              aria-label="button buy medicine"
            >
              Buy medicine
            </ButtonLink>
          </div>
          <div className={s.image}></div>
        </div>
      </SectionWrapper>
      <Features />
    </>
  )
}

export default PharmacyPromo
