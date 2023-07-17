import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const contextClass = {
  success: 'bg-slate-300',
  error: 'bg-slate-300',
  info: 'bg-slate-300',
  warning: 'bg-slate-300',
  default: 'bg-slate-300',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          toastClassName={({ type }) => contextClass[type || 'default'] + ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'}
          bodyClassName={() => 'text-base text-center uppercase text-black font-bold p-3'}
          position="top-center"
        />
        <App />
      </Provider>
    </BrowserRouter>
  </>,
)
