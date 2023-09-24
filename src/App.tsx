import React from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Cabecalho />
      <Hero />
      <div className='container'>
        <ListaVagas />
      </div >
    </>
  )
}

export default App
