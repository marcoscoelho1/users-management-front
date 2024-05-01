import { useMemo, useState } from 'react'

interface PaginationObj {
  [page: number]: [start: number, end: number]
}

export const useUsersList = (totalItems: number, totalItemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageCount = useMemo(
    () => totalItems / totalItemsPerPage,
    [totalItems, totalItemsPerPage]
  )

  const calcPagination = useMemo(() => {
    const totalPages = Math.ceil(totalItems / totalItemsPerPage)
    const pagination: PaginationObj = {}

    for (let page = 1; page <= totalPages; page++) {
      const start = (page - 1) * totalItemsPerPage
      const end = page * totalItemsPerPage
      pagination[page] = [start, end]
    }

    return pagination
  }, [totalItems, totalItemsPerPage])

  return { calcPagination, currentPage, setCurrentPage, pageCount }
}
