import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import LandingPage from './routes/landingpage/LandingPage';
import SignUp from './routes/signup/SignUp';
import SignIn from './routes/signin/SignIn';
import AdminSignIn from './routes/AdminSignin/AdminSignIn';

// User Dashboard
import UserDashboard from './routes/user_dashboard/dashboard/Dashboard';
import Hunts from './routes/user_dashboard/hunts/Hunts';
import UserProfile from './routes/user_dashboard/profile/Profile';
import HuntsType from './routes/user_dashboard/hunts/hunts_type/HuntsType';


// Admin Dashboard
import AdminDashboard from './routes/admin_dashboard/dashboard/Dashboard';
import AdminHunts from './routes/admin_dashboard/hunts/Hunts';
import ViewHunts from './routes/admin_dashboard/hunts/view_hunts/ViewHunts';
import Profile from './routes/admin_dashboard/profile/Profile';
import Users from './routes/admin_dashboard/users/Users';
import Transactions from './routes/admin_dashboard/transactions/Transactions';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path = '/signup' element = {<SignUp />}/>
        <Route path = '/login' element = {<SignIn />}/>
        <Route path = '/admin-login' element = {<AdminSignIn />}/>


        {/* User Dashboard Routes */}
        <Route path='/user/dashboard' element = {<UserDashboard />}/>
        <Route path='/user/hunts' element = {<Hunts />}/>
        <Route path='/user/hunts/:hunt_type' element = {<HuntsType />}/>
        <Route path='/user/profile' element = {<UserProfile />}/>

        {/* Admin Dashboard Routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/hunts' element={<AdminHunts />}/>
        <Route path='/admin/view_hunts' element={<ViewHunts />}/>
        {/* <Route path='/admin/profile' element={<Profile />}/> */}
        <Route path='/admin/users' element={<Users />}/>
        <Route path='/admin/transactions' element={<Transactions />}/>



      </Routes>
    </BrowserRouter>
  )
}
