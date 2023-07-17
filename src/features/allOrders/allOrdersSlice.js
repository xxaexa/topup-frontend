import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  orders: [],
  search: '',
  isLoading: true,
  totalPage: 0,
  page: 0,
}

export const getAllOrder = createAsyncThunk('order/', async (_, thunkAPI) => {
  const { page, search } = thunkAPI.getState().allOrder
  console.log(page)
  let url = `https://topup-backend.vercel.app/api/order?page=${page}`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
})

const allOrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrder.pending, (state, action) => {})
      .addCase(getAllOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false

        state.totalPage = payload.totalPage
        state.page = payload.page
        state.orders = payload.order
      })
      .addCase(getAllOrder.rejected, (state, { payload }) => {
        toast.error('Data tidak dapat ditampilkan')
      })
  },
})

export const { changePage } = allOrderSlice.actions

export default allOrderSlice.reducer
