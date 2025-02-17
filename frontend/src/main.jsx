import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import {Provider} from "react-redux"
import {store} from "./redux/store.js"
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>
  </React.StrictMode>,
  </Provider>
)
