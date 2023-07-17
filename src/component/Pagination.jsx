import { useDispatch } from 'react-redux'
import { changePage } from '../features/allOrders/allOrdersSlice'

const Pagination = ({ totalPage }) => {
  const dispatch = useDispatch()

  const pages = Array.from({ length: totalPage }, (_, index) => {
    return index + 1
  })

  return (
    <div className="space-x-2 w-11/12 mx-auto">
      {pages.map((page, i) => {
        return (
          <button key={page} onClick={() => dispatch(changePage(page - 1))} className={`hover:text-white bg-slate-400 px-2 py-1 rounded ${i === page ? 'text-page' : 'text-white'}`}>
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
