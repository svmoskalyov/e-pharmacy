import { useEffect, useState } from 'react'
import { useProductStore } from '../../stores/productStore'
import useMediaQuery from '../../hooks/useMediaQuery'
import SectionWrapper from '../../components/SectionWrapper'
import Pagination from '../../components/Pagination'
import ProductsFilter from '../../components/ProductsFilter'
import ProductCard from '../../components/ProductCard'
import s from './MedicinePage.module.scss'

interface Category {
  value: string
  label: string
}

interface Filter {
  category: string
  search: string
}

function MedicinePage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [filter, setFilter] = useState<Filter>({ category: '', search: '' })
  const [currentPage, setCurrentPage] = useState<number>(1)
  const products = useProductStore(state => state.products)
  const fetchProducts = useProductStore(state => state.fetchProducts)
  const isDesktop = useMediaQuery('(min-height: 2700px)')
  const itemsPerPage = isDesktop ? 16 : 12

  const filterChoice = (filter: Filter) => {
    setFilter(filter)
  }

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      filter.category === '' || product.category === filter.category
    const nameMatch = product.name
      .toLowerCase()
      .includes(filter.search.toLowerCase())
    return categoryMatch && nameMatch
  })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const prodItems = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (products.length === 0) fetchProducts()
  }, [fetchProducts, products.length])

  useEffect(() => {
    const uniqueCategories = products.reduce((acc: Category[], product) => {
      if (!acc.find(prod => prod.value === product.category)) {
        acc.push({ value: product.category, label: product.category })
      }
      return acc
    }, [])

    setCategories(uniqueCategories)
  }, [products])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SectionWrapper>
      <div className={s.medicinePage}>
        <h2 className={s.title}>Medicine</h2>
        <ProductsFilter categories={categories} filterChoice={filterChoice} />

        {prodItems.length === 0 ? (
          <p className={s.noProducts}>No products found</p>
        ) : (
          <ul className={s.productsList}>
            {prodItems.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </ul>
        )}

        {filteredProducts.length >= itemsPerPage && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </SectionWrapper>
  )
}

export default MedicinePage
