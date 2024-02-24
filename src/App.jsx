import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './routes/landingpage/LandingPage';
import SignUp from './routes/signup/SignUp';
import SignIn from './routes/signin/SignIn';

// User Dashboard
import UserDashboard from './routes/user_dashboard/dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path = '/signup' element = {<SignUp />}/>
        <Route path = '/login' element = {<SignIn />}/>

        {/* User Dashboard Routes */}
        <Route path='/user/dashboard' element = {<UserDashboard />}/>

      </Routes>
    </BrowserRouter>
  )
}
