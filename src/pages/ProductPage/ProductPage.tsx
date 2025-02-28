import { useParams } from 'react-router'
import s from './ProductPage.module.scss'
import SectionWrapper from '../../components/SectionWrapper'
import ProductCard from '../../components/ProductCard'
import ProductInfo from '../../components/ProductInfo'

type ReviewsObject = {
  name: string
  rating: number
  createdAt: string
  comment: string
}

interface Product {
  id: string
  photo: string
  name: string
  suppliers: string
  stock: string
  price: string
  category: string
  description: string
  reviews: ReviewsObject[]
}

const products: Product[] = [
  {
    id: '0',
    photo: 'https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg',
    name: 'Aspirin',
    suppliers: 'Square',
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
  },
  {
    id: '2',
    photo: 'https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg',
    name: 'Ibuprofen',
    suppliers: 'Beximco',
    stock: '09',
    price: '53.76',
    category: 'Head',
    description: 'description product ...',
    reviews: [
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      }
    ]
  },
  {
    id: '3',
    photo: 'https://i.ibb.co/GxTVSVk/shop-4-9-1000x1000-min.jpg',
    name: 'Acetaminophen',
    suppliers: 'ACI',
    stock: '14',
    price: '28.57',
    category: 'Hand',
    description: 'description product ...',
    reviews: [
      {
        name: 'Horeo Boba',
        rating: 3,
        createdAt: '2025-02-01T12:14:11.325Z',
        comment: 'bla-bla-bla ... good product'
      }
    ]
  },
  {
    id: '4',
    photo: 'https://i.ibb.co/X330FTj/shop-4-10-1000x1000-min.jpg',
    name: 'Naproxen',
    suppliers: 'Uniliver',
    stock: '10',
    price: '56.34',
    category: 'Medicine',
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

function ProductPage() {
  const { prodId } = useParams<{ prodId: string }>()
  console.log('prodId --', prodId)

  const prod = products.find(e => e.id === prodId)
  console.log('prod --', prod)

  if (!prod) {
    return <div className={s.productPage}>Product not found</div>
  }

  return (
    <SectionWrapper>
      <div className={s.productPage}>
        <ProductCard {...prod} />
        <ProductInfo {...prod} />
      </div>
    </SectionWrapper>
  )
}

export default ProductPage
