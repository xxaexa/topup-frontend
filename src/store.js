import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modal/modalSlice'
import orderReducer from './features/order/orderSlice'
import allOrdersSlice from './features/allOrders/allOrdersSlice'

export const store = configureStore({
  reducer: {
    allOrder: allOrdersSlice,
    order: orderReducer,
    modal: modalReducer,
  },
})
