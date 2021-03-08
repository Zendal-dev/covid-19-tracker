import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import CovidState from './context/CovidState'

import './index.scss'

ReactDOM.render(
   <React.StrictMode>
      <CovidState>
         <App/>
      </CovidState>
   </React.StrictMode>,
   document.getElementById('root')
)

