import React, {useState, useEffect} from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Dashboard.module.css';

import users from './asset/users.svg'
import transaction from './asset/transaction.svg';
import transaction_2 from './asset/transaction_2.svg';


import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function AdminDashboard() {
 
  return (
   
    <Container fluid className={`${styles.admin_dashboard}`}>
        <Row>
            <AdminSidebar active="Dashboard"/>
            <Col className='offset-sm-2 offset-lg-3 ps-3 pe-4'>
               <DashboardNavbar />
                <Row className='mt-4'>
                    <Col><p className={`${styles.welcome}`}>Welcome Claire,</p></Col>
                </Row>

                <div className='d-flex flex-wrap justify-content-between'>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={users} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of registered Users</div>
                          <div className={`${styles.widget_value}`}>29</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of transactions</div>
                          <div className={`${styles.widget_value}`}>29</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction_2} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of successful transaction</div>
                          <div className={`${styles.widget_value}`}>29</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction_2} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of pending transaction</div>
                          <div className={`${styles.widget_value}`}>29</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction_2} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total amount generated</div>
                          <div className={`${styles.widget_value}`}>29</div>
                          
                      </div>
                  </div>
                </div>


             
                <Row className='d-none'>
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
                        <textarea name="" id="" placeholder='Write your Message here' className='mb-2'></textarea>
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
