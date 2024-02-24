import React from 'react';

import Sidebar from '../../general/sidebar/Sidebar';
import { userSidebarItems } from '../../../utils/userSidebarItems';
export default function UserSidebar() {
  return (
    <Sidebar userSidebarItems = {userSidebarItems}/>
  )
}
