import s from './Pagination.module.scss'

// // Типи пропсів для компоненту Pagination
// interface PaginationProps {
//   itemsPerPage: number
//   totalItems: number
//   paginate: (pageNumber: number) => void
//   currentPage: number
// }

// function Pagination({
//   itemsPerPage,
//   totalItems,
//   paginate,
//   currentPage
// }: PaginationProps) {
//   const pageNumbers: number[] = []

//   // Генерація номерів сторінок
//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i)
//   }

//   return (
//     <nav>
//       <ul className={s.pagination}>
//         {/* Кнопка для переходу на першу сторінку */}
//         <li className={s.pageItem}>
//           <a
//             onClick={() => paginate(1)}
//             // href="#!"
//             className={s.pageLink}
//             aria-label="First"
//           >
//             First
//           </a>
//         </li>

//         {/* Кнопка для переходу на попередню сторінку */}
//         <li className={s.pageItem}>
//           <a
//             onClick={() => paginate(currentPage - 1)}
//             // href="#!"
//             className={s.pageLink}
//             aria-label="Previous"
//             disabled={currentPage === 1}
//           >
//             Prev
//           </a>
//         </li>

//         {/* Номери сторінок */}
//         {pageNumbers.map(number => (
//           <li
//             key={number}
//             className={`{s.pageItem} ${number === currentPage ? 'active' : ''}`}
//           >
//             <a onClick={() => paginate(number)} href="#!" className={s.pageLink}>
//               {number}
//             </a>
//           </li>
//         ))}

//         {/* Кнопка для переходу на наступну сторінку */}
//         <li className={s.pageItem}>
//           <a
//             onClick={() => paginate(currentPage + 1)}
//             // href="#!"
//             className={s.pageLink}
//             aria-label="Next"
//             disabled={currentPage === pageNumbers.length}
//           >
//             Next
//           </a>
//         </li>

//         {/* Кнопка для переходу на останню сторінку */}
//         <li className={s.pageItem}>
//           <a
//             onClick={() => paginate(pageNumbers.length)}
//             // href="#!"
//             className={s.pageLink}
//             aria-label="Last"
//           >
//             Last
//           </a>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Pagination

// -----

import { useState, useEffect, useRef } from 'react'

interface PaginationProps {
  totalPages: number
  // totalItems: number
  // itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

function Pagination({
  totalPages,
  // totalItems,
  // itemsPerPage,
  currentPage,
  onPageChange
}:PaginationProps) {
  // const totalPages = Math.ceil(totalItems / itemsPerPage)
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  const [displayedPages, setDisplayedPages] = useState<number[]>([]);
  
const generateDisplayedPages = () => {
    const newDisplayedPages: number[] = [];
    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        newDisplayedPages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 1; i <= 2; i++) {
          newDisplayedPages.push(i);
        }
        newDisplayedPages.push(0); // Represent "..."
        // newDisplayedPages.push(totalPages);
      } else if (currentPage >= totalPages - 1) {
        // fot tablets totalPages - 2
        // newDisplayedPages.push(1);
        newDisplayedPages.push(0) // Represent "..."
        for (let i = totalPages - 1; i <= totalPages; i++) {
          // fot tablets totalPages - 2
          newDisplayedPages.push(i)
        }
      } else {
        // newDisplayedPages.push(1);
        newDisplayedPages.push(0); // Represent "..."
        newDisplayedPages.push(currentPage - 1);
        newDisplayedPages.push(currentPage);
        newDisplayedPages.push(currentPage + 1);
        newDisplayedPages.push(0); // Represent "..."
        // newDisplayedPages.push(totalPages);
      }
    }
    setDisplayedPages(newDisplayedPages);
  };

  useEffect(() => {
    generateDisplayedPages();
  }, [currentPage, totalPages]);

  const handlePageClick = (page: number) => {
    if (page !== 0) {
      onPageChange(page);
    }
  };

  // const handleFirstPage = () => {
  //   onPageChange(1)
  // }
  
  // const handleLastPage = () => {
  //   onPageChange(totalPages)
  // }
  
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     onPageChange(currentPage + 1)
  //   }
  // }
  
  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     onPageChange(currentPage - 1)
  //   }
  // }
  

  // const getDisplayedPages = () => {
  //   return Array.from({ length: totalPages }, (_, i) => i + 1)
  //   // const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    
  // }
  
  
  // const getDisplayedPages = () => {
    //   const maxPagesToShow = 2
    //   if (totalPages <= maxPagesToShow) {
      //     return pages
      //   }

//   const firstPage = 1
//   const lastPage = totalPages
//   const currentPageIndex = pages.indexOf(currentPage)
//   let startPageIndex = currentPageIndex - 2
//   let endPageIndex = currentPageIndex + 2

//   if (startPageIndex < 0) {
//     startPageIndex = 0
//     endPageIndex = maxPagesToShow - 1
//   }

//   if (endPageIndex >= totalPages) {
//     endPageIndex = totalPages - 1
//     startPageIndex = totalPages - maxPagesToShow
//   }

//   const displayedPages: (number | string)[] = pages.slice(startPageIndex, endPageIndex + 1)

//   if (startPageIndex > 0) {
//     displayedPages.unshift('...')
//     displayedPages.unshift(firstPage)
//   }

//   if (endPageIndex < totalPages - 1) {
//     displayedPages.push('...')
//     displayedPages.push(lastPage)
//   }

//   return displayedPages
// }

  // console.log(getDisplayedPages())
  
  return (
    <div className={s.pagination}>
      <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
        Перша
      </button>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Попередня
      </button>
      {displayedPages.map((page, index) => (
        <div key={index}>
          {page === 0 ? (
            <span>...</span>
          ) : (
            <button
              onClick={() => handlePageClick(page)}
              className={currentPage === page ? `${s.active}` : ''}
            >
              {page}
            </button>
          )}
        </div>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Наступна
      </button>
      <button
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        Остання
      </button>
    </div>

    //   <div className={s.pagination}>
    //     <button onClick={handleFirstPage} disabled={currentPage === 1}>
    //       Перша
    //     </button>
    //     <button onClick={handlePreviousPage} disabled={currentPage === 1}>
    //       Попередня
    //     </button>
    //     {getDisplayedPages().map((page, index) =>
    //       page === '...' ? (
    //         <span key={index} className={s.dots}>
    //           ...
    //         </span>
    //       ) : (
    //         <button
    //           key={page}
    //           onClick={() => onPageChange(page as number)}
    //           className={currentPage === page ? `${s.active}` : ''}
    //         >
    //           {page}
    //         </button>
    //       )
    //     )}
    //     {/* {pages.map(page => (
    //       <button
    //         key={page}
    //         onClick={() => onPageChange(page)}
    //         className={currentPage === page ? `${s.active}` : ''}
    //       >
    //         {page}
    //       </button>
    //     ))} */}
    //     {/* <span>
    //       {currentPage} з {totalPages}
    //     </span> */}
    //     <button onClick={handleNextPage} disabled={currentPage === totalPages}>
    //       Наступна
    //     </button>
    //     <button onClick={handleLastPage} disabled={currentPage === totalPages}>
    //       Остання
    //     </button>
    //   </div>
  )
}

export default Pagination

