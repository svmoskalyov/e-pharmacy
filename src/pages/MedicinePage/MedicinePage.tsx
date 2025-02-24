import { useEffect, useState } from 'react'
import SectionWrapper from '../../components/SectionWrapper'
import Pagination from '../../components/Pagination'
import ProductsFilter from '../../components/ProductsFilter'
import ProductCard from '../../components/ProductCard'
import s from './MedicinePage.module.scss'

interface Product {
  id: string
  photo: string
  name: string
  suppliers: string
  stock: string
  price: string
  category: string
}

const products: Product[] = [
  {
    id: '0',
    photo: 'https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg',
    name: 'Aspirin',
    suppliers: 'Square',
    stock: '12',
    price: '89.66',
    category: 'Medicine'
  },
  {
    id: '1',
    photo: 'https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg',
    name: 'Paracetamol',
    suppliers: 'Acme',
    stock: '19',
    price: '34.16',
    category: 'Heart'
  },
  {
    id: '2',
    photo: 'https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg',
    name: 'Ibuprofen',
    suppliers: 'Beximco',
    stock: '09',
    price: '53.76',
    category: 'Head'
  },
  {
    id: '3',
    photo: 'https://i.ibb.co/GxTVSVk/shop-4-9-1000x1000-min.jpg',
    name: 'Acetaminophen',
    suppliers: 'ACI',
    stock: '14',
    price: '28.57',
    category: 'Hand'
  },
  {
    id: '4',
    photo: 'https://i.ibb.co/X330FTj/shop-4-10-1000x1000-min.jpg',
    name: 'Naproxen',
    suppliers: 'Uniliver',
    stock: '10',
    price: '56.34',
    category: 'Medicine'
  }
]

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
  const itemsPerPage = 12

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
    const uniqueCategories = products.reduce((acc: Category[], product) => {
      if (!acc.find(prod => prod.value === product.category)) {
        acc.push({ value: product.category, label: product.category })
      }
      return acc
    }, [])

    setCategories(uniqueCategories)
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
              <ProductCard key={item.id} {...item} />
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
