import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import regist from './app/regist.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <Provider store={regist}>

    <App />
    </Provider>
  </React.StrictMode>,
)
