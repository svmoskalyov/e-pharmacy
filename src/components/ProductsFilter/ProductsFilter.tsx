import { useState } from 'react'
import s from './ProductsFilter.module.scss'

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
    category: 'Leg'
  }
]

function ProductsFilter() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      selectedCategory === '' || product.category === selectedCategory
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return categoryMatch && nameMatch
  })

  return (
    <div className={s.productFilterContainer}>
      <div className={s.filterControls}>
        <label htmlFor="category">Product category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {[...new Set(products.map(product => product.category))].map(
            category => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>

        <label htmlFor="search">Search medicine:</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <ul className={s.productList}>
        {filteredProducts.map(product => (
          <li className={s.productImage} key={product.id}>
            <img
              src={product.photo}
              alt={product.name}
              className={s.productImage}
            />
            <div className={s.productDetails}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Suppliers: {product.suppliers}</p>
              <p>Stock: {product.stock}</p>
              <p>Price: {product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsFilter
