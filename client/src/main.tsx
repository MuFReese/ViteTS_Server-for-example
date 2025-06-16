
import  DataMainUser  from './components/MainInfo/MainInfo'

import React from 'react'
import ReactDom from 'react-dom/client'
import './normalize.css'
import ErrorBoundary from './components/ErrorBoundary'



ReactDom.createRoot(document.querySelector('#app')!).render(
  <Main/>
)

function Main() {


  return (
    <ErrorBoundary>
      <DataMainUser/>
    </ErrorBoundary>
  )
}