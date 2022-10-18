import React from 'react'
import './sidebar2.css'
import WebhookIcon from '@mui/icons-material/Webhook';
import SidebarItem from '../SidebarItem/SidebarItem';
import items from '../../data/menus.json';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <WebhookIcon className='logo1'/>
        <span className='logo'>Hércules</span>
      </div>
      <div className="bottom">
        {items.map((item, index) => <SidebarItem key={index} item={item} />)}
      </div>
    </div>
  )
}

export default Sidebar