import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'
const initialState = {
  order: {},
  isLoading: {},
}

export const createOrder = createAsyncThunk('order/createOrder', async (values, thunkAPI) => {
  try {
    const resp = await axios.post('http://localhost:3000/api/order/createOrder', { ...values })
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
})

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.order = payload
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        toast.error('Transaksi Gagal')
      })
  },
})

export const {} = orderSlice.actions

export default orderSlice.reducer
