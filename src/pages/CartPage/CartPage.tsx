import CartListItems from '../../components/CartListItems'
import DeliveryInfo from '../../components/DeliveryInfo'
import SectionWrapper from '../../components/SectionWrapper'
import s from './CartPage.module.scss'

const cartItems = [
  {
    id: '0',
    photo: 'https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg',
    name: 'Aspirin ascavv  fwevw vw sdvsdvsdvsv',
    suppliers: 'Square efwev wv wvweverveb berb vvwevwew ',
    stock: '12',
    price: '89.66',
    category: 'Medicine',
    description:
      'description product ... description product description product description product description product description product description product description product description product description product',
    reviews: [
      {
        name: 'Horeo Bobadgghhhhhhhhh wqdgrehrtj',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment:
          'bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product'
      },
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      },
      {
        name: 'Horeo Bobadgghhhhhhhhh wqdgrehrtj',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment:
          'bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product'
      },
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      },
      {
        name: 'Horeo Bobadgghhhhhhhhh wqdgrehrtj',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment:
          'bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product bla-bla-bla ... good product'
      },
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      },
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      }
    ]
  },
  {
    id: '1',
    photo: 'https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg',
    name: 'Paracetamol',
    suppliers: 'Acme',
    stock: '19',
    price: '34.16',
    category: 'Heart',
    description: 'description product ...',
    reviews: [
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      }
    ]
  }
]

function CartPage() {
  return (
    <SectionWrapper>
      <div className={s.cartPage}>
        <h2 className={s.title}>Cart</h2>
        <DeliveryInfo />
        <CartListItems cartItems={cartItems} />
      </div>
    </SectionWrapper>
  )
}

export default CartPage
