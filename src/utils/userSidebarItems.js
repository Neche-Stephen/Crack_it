import dashboard_icon from "../assets/images/dashboard.png";
import hunt_icon from "../assets/images/hunt_icon.png";
import profile_icon from "../assets/images/profile_icon.png";

export const userSidebarItems = [
    {
        itemName : 'Dashboard',
        active: true,
        icon : dashboard_icon,
        itemLink: '/user/dashboard'
    },

    {
        itemName : "Hunts",
        active: false,
        icon : hunt_icon,
        itemLink: '/user/hunts',
    },

    // {
    //     itemName : "Profile",
    //     active: false,
    //     icon : profile_icon,
    //     itemLink: '/admin/profile',
    // }

]