import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './routes/landingpage/LandingPage';
import SignUp from './routes/signup/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path = '/signup' element = {<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}
