import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import AuthProvider from './providers/AuthProvider'
import { Provider } from 'react-redux'
import store from './app/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
      <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
      </div>
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
