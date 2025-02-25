import { useState, useEffect } from 'react'
import IconChevron from '../ui/IconChevron'
import s from './Pagination.module.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange
}: PaginationProps) {
  const [displayedPages, setDisplayedPages] = useState<number[]>([])

  const generateDisplayedPages = () => {
    const newDisplayedPages: number[] = []
    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        newDisplayedPages.push(i)
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 1; i <= 2; i++) {
          newDisplayedPages.push(i)
        }
        newDisplayedPages.push(0) // Represent "..."
        // newDisplayedPages.push(totalPages);
      } else if (currentPage >= totalPages - 1) {
        // for tablets - in if totalPages - 2
        // newDisplayedPages.push(1);
        newDisplayedPages.push(0) // Represent "..."
        for (let i = totalPages - 1; i <= totalPages; i++) {
          // for tablets - in for totalPages - 2
          newDisplayedPages.push(i)
        }
      } else {
        // newDisplayedPages.push(1);
        newDisplayedPages.push(0) // Represent "..."
        newDisplayedPages.push(currentPage - 1)
        newDisplayedPages.push(currentPage)
        newDisplayedPages.push(currentPage + 1)
        newDisplayedPages.push(0) // Represent "..."
        // newDisplayedPages.push(totalPages);
      }
    }
    setDisplayedPages(newDisplayedPages)
  }

  useEffect(() => {
    generateDisplayedPages()
  }, [currentPage, totalPages])

  const handlePageClick = (page: number) => {
    if (page !== 0) {
      onPageChange(page)
    }
  }

  return (
    <div className={s.pagination}>
      <button
        className={s.btnChevron}
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
      >
        <IconChevron count={2} look="left" />
      </button>
      <button
        className={s.btnChevron}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ marginRight: '17px' }}
      >
        <IconChevron count={1} look="left" />
      </button>
      {displayedPages.map((page, index) => (
        <div key={index}>
          {page === 0 ? (
            <span className={s.dots}>...</span>
          ) : (
            <button
              onClick={() => handlePageClick(page)}
              className={
                currentPage === page
                  ? `${s.btnPage} ${s.active}`
                  : `${s.btnPage}`
              }
            >
              {page}
            </button>
          )}
        </div>
      ))}
      <button
        className={s.btnChevron}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ marginLeft: '17px' }}
      >
        <IconChevron count={1} look="right" />
      </button>
      <button
        className={s.btnChevron}
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        <IconChevron count={2} look="right" />
      </button>
    </div>
  )
}

export default Pagination
