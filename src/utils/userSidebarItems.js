import dashboard_icon from "../assets/images/dashboard.png";
import hunt_icon from "../assets/images/hunt_icon.png";
import profile_icon from "../assets/images/profile_icon.png";

import dashboard_new_icon from './utilsAsset/dashboard.png';
import hunt_new_icon from './utilsAsset/hunt.png';
import profile_new_icon from './utilsAsset/profile.png';


export const userSidebarItems = [
    {
        itemName : 'Dashboard',
        active: true,
        icon : dashboard_new_icon,
        // iconWidth: '10%',
        itemLink: '/user/dashboard'
    },

    // {
    //     itemName : "Hunts",
    //     active: false,
    //     icon : hunt_new_icon,
    //     // iconWidth: '13%',
    //     itemLink: '/user/hunts'
    // },

    // {
    //     itemName : "Profile",
    //     active: false,
    //     icon : profile_icon,
    //     itemLink: '/user/dashboard',
    // }

]