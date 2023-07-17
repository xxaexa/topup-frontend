import { useState } from 'react'
import { Button, Input, Variasi } from './Form/index'
import { useDispatch } from 'react-redux'
import { createOrder } from '../features/order/orderSlice'
import { toast } from 'react-toastify'
import { openModal } from '../features/modal/modalSlice'
const Form = ({ currency, game }) => {
  const dispatch = useDispatch()

  const [showPrice, setShowPrice] = useState('')
  const initialState = {
    uid: '',
    jenis: '',
    variasi: '',
    harga: showPrice,
  }
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { uid, jenis, variasi, harga } = values
    if (!uid || !jenis || !variasi || !harga) {
      toast.error('Harus diisi semua ya kak !', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    } else {
      dispatch(createOrder(values))
      setTimeout(() => {
        dispatch(openModal())
      }, 500)
    }
  }

  const handleClickPrice = (e) => {
    const price = e.target.dataset.price
    setShowPrice(price)
  }
  return (
    <div id="voucher" className="mt-8 w-96 ">
      <h1 className="mb-8 text-main text-center block font-bold text-4xl md:text-6xl ">VOUCHER</h1>
      <div className="mx-auto text-center p-4 rounded-2xl bg-slate-300 bg-opacity-50  md:text-xl">
        <form onSubmit={handleSubmit}>
          {/* uid/id/no */}
          <p className="text-xl">UID/ID/NOMOR</p>
          <Input type={'text'} name="uid" value={values.uid} handleChange={handleChange} />

          {/* type voucher */}
          <Input type={'hidden'} name={'jenis'} value={(values.jenis = `${game}`)} handleChange={handleChange} />

          {/* variasi */}
          <p className="text-xl">VARIASI</p>
          <Variasi value={`1000 ${currency}`} handleChange={handleChange} text={`1000 ${currency}`} price={100000} handleClickPrice={handleClickPrice} />

          <Variasi value={`2000 ${currency} `} handleChange={handleChange} text={`2000 ${currency}`} price={200000} handleClickPrice={handleClickPrice} />

          <Variasi value={`3000 ${currency}`} handleChange={handleChange} text={`3000 ${currency}`} price={300000} handleClickPrice={handleClickPrice} />

          <Variasi value={`4000 ${currency}`} handleChange={handleChange} text={`4000 ${currency}`} price={400000} handleClickPrice={handleClickPrice} />

          <Variasi value={`5000 ${currency}`} handleChange={handleChange} text={`5000 ${currency}`} price={500000} handleClickPrice={handleClickPrice} />

          <Input type={'hidden'} name="harga" value={(values.harga = showPrice) || ''} handleChange={handleChange} />

          {/* price display */}
          <div className="text-center">
            <p className="text-xl">HARGA</p>
            <p className="my-2 mx-auto w-full  rounded-xl  p-1 bg-slate-400 transition-all checked:bg-black text-slate-200 bg-opacity-70">{showPrice || 0}</p>
          </div>

          {/* submit display */}
          <Button text={'BELI'} />
        </form>
      </div>
    </div>
  )
}

export default Form
