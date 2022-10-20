import React from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="navbarLeft">
          <span className='parent-route'>Edición</span>
          <KeyboardArrowRightIcon className='arrow' />
          <span className='child-route'>Empresas</span>
        </div>
        <span className='botones'>
          <Button variant="outlined" size='small' className='cambiarEmpresa'>Cambiar Empresa</Button>
          <Button variant="outlined" size='small' className='logout'>Cerrar Sesión</Button>
        </span>
      </div>
    </div>
  )
}

export default Navbar