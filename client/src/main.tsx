import { contactMe } from './components/modal.contactMe'
import { DataMainUser } from './data'

import React from 'react'
import ReactDom from 'react-dom/client'
import './style/modal.css'
import './style/normalize.css'
import './style/style.css'


ReactDom.createRoot(document.querySelector('#app')!).render(
  <React.StrictMode>
    <DataMainUser/>
  </React.StrictMode>
)