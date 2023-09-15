import React from 'react'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='899142219504-gvv3dota3e2tvckatcnc0ib0ukue1s1n.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
    
  </Provider>,
)
