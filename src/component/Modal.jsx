import { closeModal } from '../features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Modal = () => {
  const order = useSelector((state) => state.order.order.order)
  console.log(order)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-full w-full bg-opacity-60 fixed">
      <div className="flex flex-col justify-center items-center min-h-screen border-2 p-1 font-semibold tracking-widest">
        <div className="bg-slate-200 p-6 rounded-xl">
          <div className="flex space-x-2 p-2">
            <div className="w-2/5 text-base">
              <p className="font-bold">KODEUNIK</p>
              <p>VOUCHER</p>
              <p>UID</p>
              <p>HARGA</p>
              <p>VARIASI</p>
              <p>STATUS</p>
              <p>TANGGAL</p>
            </div>
            <div className="text-base">
              <p>:{order._id} </p>
              <p>: {order.jenis}</p>
              <p>: {order.uid}</p>
              <p>: {order.harga}</p>
              <p>: {order.variasi}</p>
              <p>: {order.status}</p>
              <p>: {order.createdAt}</p>
            </div>
          </div>
          <p className="mt-5 text-center">JANGAN LUPA SIMPAN KODE UNIK</p>
          <button
            className="block mx-auto mt-8 p-1 border-2 border-red-500 rounded-xl w-28 hover:bg-red-400 ease-in-out duration-500 hover:text-white "
            onClick={() => {
              dispatch(closeModal())
              navigate('/')
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
