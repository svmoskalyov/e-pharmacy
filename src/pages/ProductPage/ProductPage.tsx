import { useParams } from 'react-router'
import { useProductStore } from '../../stores/productStore'
import SectionWrapper from '../../components/SectionWrapper'
import ProductCard from '../../components/ProductCard'
import ProductInfo from '../../components/ProductInfo'
import s from './ProductPage.module.scss'

function ProductPage() {
  const products = useProductStore(state => state.products)
  const { prodId } = useParams<{ prodId: string }>()
  const prod = products.find(e => e.id === prodId)
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
