import React from 'react'
import Button from '@mui/material/Button';

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="navbarLeft"></div>
        <span className='botones'>
          <Button variant="outlined" size='small' className='cambiarEmpresa'>Cambiar Empresa</Button>
          <Button variant="outlined" size='small' className='logout'>Cerrar Sesión</Button>
        </span>
      </div>
    </div>
  )
}

export default Navbar