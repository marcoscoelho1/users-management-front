import ReactPaginate from 'react-paginate'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import { PaginationProps as Props } from './types'
import './pagination.css'

const Pagination = (props: Props): JSX.Element => {
  return (
    <div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel={<ChevronRight />}
        previousLabel={<ChevronLeft />}
        pageClassName="paginationButton"
        activeClassName="paginationButton--active"
        {...props}
      />
    </div>
  )
}

export default Pagination
