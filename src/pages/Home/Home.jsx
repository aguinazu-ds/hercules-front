import React from 'react'
import Datatable from '../../components/Datatable/Datatable'


import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='tituloTabla'>Empresas</div>
      <div className='totalEntradas'>Total Empresas</div>
      <Datatable />
    </div>
  )
}

export default Home