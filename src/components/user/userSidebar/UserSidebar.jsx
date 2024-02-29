import React from 'react';

import Sidebar from '../../general/sidebar/Sidebar';
import { userSidebarItems } from '../../../utils/userSidebarItems';
export default function UserSidebar({active}) {
  return (
    <Sidebar sidebarItems = {userSidebarItems} active={active}/>
  )
}
