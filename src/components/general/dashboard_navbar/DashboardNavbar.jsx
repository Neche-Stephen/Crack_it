import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import styles from './DashboardNavbar.module.css';
import notification from '../../../assets/images/notification.png';
import profile from '../../../assets/images/profile.png';
import logout from '../../../assets/images/logout.png';
import crack_it_logo from '../../../assets/images/Crack It, Find It Logo 8.png';
import hamburger from './asset/Group (1).png';


export default function DashboardNavbar({handleShow}) {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    sessionStorage.removeItem("Token");
    navigate('/login')
  }
  return (
    <Row className={`${styles.navbar_row} align-items-center mt-4 px-3`}>
        <Col xs = '3' className='p-0 d-sm-none' >
          <img src={crack_it_logo} alt=""  className='w-100'/>
        </Col>
        <Col xs = 'auto' className='p-0 ms-auto d-sm-none'>
          <img src={hamburger} alt="" className='w-50' onClick={handleShow} />
        </Col>
        <div xs = 'auto' className={`${styles.navbar_icons} ms-sm-auto me-4`} >
            <img src={notification} alt="" className='w-100'/>
        </div>
        <div xs = 'auto' className={`${styles.navbar_icons} me-4`}  >
            <img src={profile} alt="" className='w-100'/>
        </div>
        <div className={`${styles.navbar_icons}`} >
            <img src={logout} alt="" className='w-100' onClick={handleLogout} style={{cursor:'pointer'}}/>
        </div >
       
    </Row>
  )
}
