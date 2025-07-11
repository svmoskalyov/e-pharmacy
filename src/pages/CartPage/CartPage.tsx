import CartListItems from '../../components/CartListItems'
import DeliveryInfo from '../../components/DeliveryInfo'
import SectionWrapper from '../../components/SectionWrapper'
import s from './CartPage.module.scss'

function CartPage() {
  return (
    <SectionWrapper>
      <div className={s.cartPage}>
        <h2 className={s.title}>Cart</h2>
        <div className={s.box}>
          <DeliveryInfo />
          <CartListItems />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CartPage
