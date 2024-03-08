import React from 'react';

import Sidebar from '../../general/sidebar/Sidebar';
import { userSidebarItems } from '../../../utils/userSidebarItems';
export default function UserSidebar({show, handleClose, active}) {
  return (
    <Sidebar show = {show} handleClose = {handleClose} sidebarItems = {userSidebarItems} active={active}/>
  )
}
