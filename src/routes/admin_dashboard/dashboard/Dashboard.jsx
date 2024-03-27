import React, {useState, useEffect} from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Dashboard.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function AdminDashboard() {
 
  return (
   
    <Container fluid className={`${styles.admin_dashboard}`}>
        <Row>
            <AdminSidebar active="Dashboard"/>
            <Col className='offset-3'>
               <DashboardNavbar />
                <Row className='mt-4'>
                    <Col><p className={`${styles.welcome}`}>Welcome Claire,</p></Col>
                </Row>
                <Row className='d-none'>
                  <Col xs = "4" className=''>
                    <div className={`${styles.dashboard_card}`}>
                        
                    </div>
                  
                  </Col>
                  <Col xs = "4" className=''>
                    <div className={`${styles.dashboard_card}`}>
                        
                    </div>
                  
                  </Col>
                  <Col xs = "4" className=''>
                    <div className={`${styles.dashboard_card}`}>
                        
                    </div>
                  
                  </Col>
                </Row>
                <Row>
                  <Col md = '6' lg = '4' className='mb-lg-4' >
                    <div className={`${styles.todays_hunt}`}>
                        <h3 className='mb-4'>Today's hunt</h3>
                        <Row className='justify-content-center'>
                          <Col xs = '6'>
                           <button className={`${styles.admin_dashboard_btn}`}>Create new hunt</button>
                          </Col>
                       </Row>
                    </div>
                  </Col>

                  <Col md = '6' lg = '4'>
                    <div className={`${styles.weeks_hunt}`}>
                      <h3 className='mb-4'>This week's hunt</h3>
                      <Row className='justify-content-center'>
                          <Col xs = '6'>
                           <button className={`${styles.admin_dashboard_btn}`}>Create new hunt</button>
                          </Col>
                       </Row>
                    </div>
                  </Col>

                  <Col md = '6' lg = '4'>
                    <div className={`${styles.notification}`}>
                        <h3>Notification</h3>
                        <p>Create</p>
                        <input type="text" placeholder='Write your title here' className='mb-2'/>
                        <textarea name="" id="" cols="30" rows="2" placeholder='Write your Message here' className='mb-2'></textarea>
                        <Row className='justify-content-end m-0'>
                            <Col xs = '6'>
                                <button>Send</button>
                            </Col>
                        </Row>
                        {/* <button>Create new hunt</button> */}
                    </div>
                  </Col>

                  <Col md = '6' lg = '4' >
                    <div className={`${styles.months_hunt}`}>
                        <h3 className='mb-4'>This Month's hunt</h3>
                       <Row className='justify-content-center'>
                          <Col xs = '6'>
                           <button className={`${styles.admin_dashboard_btn}`}>Create new hunt</button>
                          </Col>
                       </Row>
                    </div>
                  </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
