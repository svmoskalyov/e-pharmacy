import { useState } from 'react'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Select from '../Select'
import s from './ProductsFilter.module.scss'

interface Category {
  value: string
  label: string
}

interface Filter {
  category: string
  search: string
}

interface ProductsFilterProps {
  categories: Category[]
  filterChoice: (filter: Filter) => void
}

function ProductsFilter({ categories, filterChoice }: ProductsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSelectChange = (value: string) => {
    setSelectedCategory(value)
  }

  const sendFilterChoice = () => {
    if (selectedCategory === '' && searchQuery === '') return
    filterChoice({ category: selectedCategory, search: searchQuery })
  }

  return (
    <div className={s.productFilterContainer}>
      <div className={s.filterControls}>
        <Select
          options={categories}
          onChange={handleSelectChange}
          placeholder="Product category"
        />

        <label className={s.searchLabel}>
          <input
            className={s.searchInput}
            type="text"
            placeholder="Search medicine"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <span className={s.searchIcon}>
            <Icon name="search" size="16" />
          </span>
        </label>
      </div>

      <Button
        onClick={sendFilterChoice}
        icon={<Icon name="filter" size="14" />}
        style={{ width: '116px' }}
      >
        <span className={s.btnText}>Filter</span>
      </Button>
    </div>
  )
}

export default ProductsFilter
