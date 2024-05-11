// import dashboard_icon from "../assets/images/dashboard.png";
import dashboard_new_icon from './utilsAsset/dashboard.svg';
// import hunt_icon from "../assets/images/hunt_icon.png";
import hunt_new_icon from './utilsAsset/hunt.svg';
// import profile_icon from "../assets/images/profile_icon.png";
import profile_new_icon from './utilsAsset/profile.svg';
import transaction from './utilsAsset/transaction_2.svg';

export const adminSidebarItems = [
    {
        itemName : 'Dashboard',
        active: true,
        icon : dashboard_new_icon,
        itemLink: '/admin/dashboard'
    },

    {
        itemName : "Hunts",
        active: false,
        icon : hunt_new_icon,
        itemLink: '/admin/hunts',
    },

    {
        itemName : "Users",
        active: false,
        icon : profile_new_icon,
        itemLink: '/admin/users',
    },

    {
        itemName : "Transactions",
        active: false,
        icon : transaction,
        itemLink: '/admin/transactions',
    }

]