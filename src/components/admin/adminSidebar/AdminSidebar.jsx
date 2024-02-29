import React from 'react';

import Sidebar from '../../general/sidebar/Sidebar';
import { adminSidebarItems } from '../../../utils/adminSidebarItems';
export default function AdminSidebar({active}) {
  return (
    <Sidebar sidebarItems = {adminSidebarItems} active={active}/>
  )
}
