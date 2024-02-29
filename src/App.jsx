import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './routes/landingpage/LandingPage';
import SignUp from './routes/signup/SignUp';
import SignIn from './routes/signin/SignIn';

// User Dashboard
import UserDashboard from './routes/user_dashboard/dashboard/Dashboard';
import Hunts from './routes/user_dashboard/hunts/Hunts';


// Admin Dashboard
import AdminDashboard from './routes/admin_dashboard/dashboard/Dashboard';
import AdminHunts from './routes/admin_dashboard/hunts/Hunts';
import Profile from './routes/admin_dashboard/profile/Profile';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path = '/signup' element = {<SignUp />}/>
        <Route path = '/login' element = {<SignIn />}/>

        {/* User Dashboard Routes */}
        <Route path='/user/dashboard' element = {<UserDashboard />}/>
        <Route path='/user/hunts' element = {<Hunts />}/>

        {/* Admin Dashboard Routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/hunts' element={<AdminHunts />}/>
        <Route path='/admin/profile' element={<Profile />}/>

      </Routes>
    </BrowserRouter>
  )
}
