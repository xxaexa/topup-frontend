import NavbarAdmin from '../component/NavbarAdmin'
import Table from '../component/Table'
import Loading from '../component/Loading'
import Pagination from '../component/Pagination'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrder } from '../features/allOrders/allOrdersSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { orders, isLoading, page, totalPage } = useSelector((state) => state.allOrder)

  useEffect(() => {
    dispatch(getAllOrder(page))
  }, [dispatch, page])

  return (
    <main className="bg-slate-200 min-h-screen tracking-widest text-xl font-semibold">
      <NavbarAdmin />
      {isLoading ? <Loading /> : null}
      <Table orders={orders} isLoading={isLoading} />
      <Pagination totalPage={totalPage} />
    </main>
  )
}

export default Dashboard
