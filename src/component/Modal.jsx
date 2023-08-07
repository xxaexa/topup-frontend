import { closeModal } from '../features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import moment from 'moment'
import { formatPrice } from '../helper/formatPrice'

const Modal = () => {
  const order = useSelector((state) => state.order.order.order)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Make a ss and then save in pdf
  const handleSave = () => {
    const capture = document.querySelector('#invoice')
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('l', 'mm', 'a7')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save('invoice.pdf')
    })
  }

  // Format date
  const date = moment(order.createdAt).format('MMM Do, YYYY')

  // Format Price
  const formatPrices = formatPrice(order.harga)

  return (
    <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-full w-full bg-opacity-60 fixed">
      <div className="flex flex-col justify-center items-center min-h-screen border-2 p-1 font-semibold tracking-widest ">
        <div className="bg-slate-200 rounded-xl p-2">
          <div id="invoice" className="p-8">
            <h2 className="text-2xl text-center">EXXA TOPUP</h2>
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
                <p>: Rp {formatPrices}</p>
                <p>: {order.variasi}</p>
                <p>: {order.status}</p>
                <p>: {date}</p>
              </div>
            </div>
            <p className="mt-2 text-center">JANGAN LUPA SIMPAN KODE UNIK</p>
          </div>
          <div className="flex">
            <button
              className="block mx-auto mt-8 p-1 border-2 border-green-500 rounded-xl w-28 hover:bg-green-400 ease-in-out duration-500 hover:text-white "
              onClick={handleSave}>
              SIMPAN
            </button>
            <button
              className="block mx-auto mt-8 p-1 border-2 border-red-500 rounded-xl w-28 hover:bg-red-400 ease-in-out duration-500 hover:text-white "
              onClick={() => {
                dispatch(closeModal())
                navigate('/')
              }}>
              TUTUP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
