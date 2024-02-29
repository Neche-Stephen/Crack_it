import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import styles from './DashboardNavbar.module.css';
import notification from '../../../assets/images/notification.png';
import profile from '../../../assets/images/profile.png';
import logout from '../../../assets/images/logout.png';
import crack_it_logo from '../../../assets/images/Crack It, Find It Logo 8.png'


export default function DashboardNavbar() {
  return (
    <Row className='align-items-center mt-4 ps-2'>
        <Col xs = '3' className='p-0 d-sm-none' >
          <img src={crack_it_logo} alt=""  className='w-100'/>
        </Col>
        <Col xs = 'auto' className='ms-auto p-0'>
            <img src={notification} alt="" className='w-50'/>
        </Col>
        <Col xs = 'auto' className='p-0'>
            <img src={profile} alt="" className='w-50'/>
        </Col>
        <Col xs = 'auto' className='p-0'>
            <img src={logout} alt="" className='w-50'/>
        </Col>
    </Row>
  )
}
