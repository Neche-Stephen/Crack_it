import React from 'react';

import Sidebar from '../../general/sidebar/Sidebar';
import { adminSidebarItems } from '../../../utils/adminSidebarItems';
export default function AdminSidebar({show, handleClose, active}) {
  return (
    <Sidebar show = {show} handleClose = {handleClose} sidebarItems = {adminSidebarItems} active={active}/>
  )
}
