import { useState } from 'react'
import Pagination from '../../components/Pagination'
import s from './MedicinePage.module.scss'

interface DataItem {
  id: number
  name: string
}

const data: DataItem[] = [
  { id: 1, name: 'Елемент 1' },
  { id: 2, name: 'Елемент 2' },
  { id: 3, name: 'Елемент 3' },
  { id: 4, name: 'Елемент 4' },
  { id: 5, name: 'Елемент 5' },
  { id: 6, name: 'Елемент 6' },
  { id: 7, name: 'Елемент 7' },
  { id: 8, name: 'Елемент 8' },
  { id: 9, name: 'Елемент 9' },
  { id: 10, name: 'Елемент 10' },
  { id: 11, name: 'Елемент 11' },
  { id: 12, name: 'Елемент 12' },
  { id: 13, name: 'Елемент 13' },
  { id: 14, name: 'Елемент 14' },
  { id: 15, name: 'Елемент 15' },
  { id: 16, name: 'Елемент 16' },
  { id: 17, name: 'Елемент 17' },
  { id: 18, name: 'Елемент 18' },
  { id: 19, name: 'Елемент 19' },
  { id: 20, name: 'Елемент 20' }
]

// const usePagination = <T extends any>(data: T[], volume: number = 10)

function MedicinePage() {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Визначення початкового та кінцевого індексів для поточної сторінки
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = data.slice(startIndex, endIndex)

  return (
    <div>
      <h1>Пагінація</h1>
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        // totalItems={data.length}
        // itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )

  // // ------------------------------ Pagination ------------------------------
  // const [currentPage, setCurrentPage] = useState<number>(1)
  // const itemsPerPage = 6
  // // Список елементів (наприклад, дані з API)
  // const items: string[] = [
  //   'Item 1',
  //   'Item 2',
  //   'Item 3',
  //   'Item 4',
  //   'Item 5',
  //   'Item 6',
  //   'Item 7',
  //   'Item 8',
  //   'Item 9',
  //   'Item 10',
  //   'Item 11',
  //   'Item 12',
  //   'Item 13',
  //   'Item 14',
  //   'Item 15',
  //   'Item 16',
  //   'Item 17',
  //   'Item 18',
  //   'Item 19',
  //   'Item 20'
  // ]

  // // Показати елементи на поточній сторінці
  // const indexOfLastItem = currentPage * itemsPerPage
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
  // // Функція для зміни сторінки
  // const paginate = (pageNumber: number): void => setCurrentPage(pageNumber)

  // return (
  //   <div>
  //     <ul>
  //       {currentItems.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //     <Pagination
  //       itemsPerPage={itemsPerPage}
  //       totalItems={items.length}
  //       paginate={paginate}
  //       currentPage={currentPage}
  //     />
  //   </div>
  // )

  // return <div className={s.medicinePage}>MedicinePage</div>
}

export default MedicinePage
