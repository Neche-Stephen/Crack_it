import dashboard_icon from "../assets/images/dashboard.png";
import hunt_icon from "../assets/images/hunt_icon.png";
import profile_icon from "../assets/images/profile_icon.png";

export const adminSidebarItems = [
    {
        itemName : 'Dashboard',
        active: true,
        icon : dashboard_icon,
        itemLink: '/admin/dashboard'
    },

    {
        itemName : "Hunts",
        active: false,
        icon : hunt_icon,
        itemLink: '/admin/hunts',
    },

    {
        itemName : "Users",
        active: false,
        icon : profile_icon,
        itemLink: '/admin/users',
    },

    {
        itemName : "Transactions",
        active: false,
        icon : profile_icon,
        itemLink: '/admin/transactions',
    }

]