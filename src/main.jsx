import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './Redux/store.jsx'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')).render(
  
      <BrowserRouter>
          <Provider store={store}>
              <App/>
            </Provider>  
          </BrowserRouter>

         
        
  
  
)
