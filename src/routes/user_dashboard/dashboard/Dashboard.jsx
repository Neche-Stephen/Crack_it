import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Dashboard.module.css';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import dashboard_card from "../../../assets/images/dashboard_card.png";
import Ellipse from './dashboard_asset/Ellipse.png';
import partcipate from './dashboard_asset/participate.png';
import box from './dashboard_asset/box.png';
import earnings from './dashboard_asset/earnings.png';
import hunt from './dashboard_asset/hunt.png';
import avatar from './dashboard_asset/avatar.png';
import avatar2 from './dashboard_asset/avatar2.png';



export default function UserDashboard() {
  return (
    <Container fluid>
        <Row>
            <UserSidebar active = 'Dashboard'/>

            <Col className='ps-4 pe-5 pb-5 offset-3'>
                <DashboardNavbar />
                <Row className='mt-3 mb-2'>
                    <Col><p className={`${styles.welcome}`}>Welcome Claire,</p></Col>
                </Row>
                <Row className='mb-4 d-none justify-content-center justify-content-lg-start'>
                  <Col sm ='6' lg = "4" className={`${styles.parent_dashboard_card}`}>
                    <div className={`${styles.dashboard_card}`}>
                        
                    </div>
                  
                  </Col>
                  <Col sm ='6' lg = "4" className='mb-5 mb-lg-0'>
                    <div className={`${styles.dashboard_card}`}>
                        
                    </div>
                  
                  </Col>
                  <Col sm ='6' lg = "4" className=''>
                    <div className={`${styles.dashboard_card}`}>
                        
                    </div>
                  
                  </Col>
                </Row>
               
                <Row>
                    <Col lg = '4' className='mb-lg-4'>
                        <div className={`${styles.hunt} `}>
                            <h3>Today's hunt</h3>
                            <p>You're to get the white box from under osisioma flyover...</p>
                            <p>You'll be given a code to crack at the entrance to kilimanjaro at railway, after getting it, proceed to the next location ... </p>
                        </div>
                    
                    </Col>
                    <Col lg = '4'>
                        <div className={`${styles.hunt}`}>
                            <h3>This week's hunt</h3>
                            <p>You're to get the white box from under osisioma flyover...</p>
                            <p>You'll be given a code to crack at the entrance to kilimanjaro at railway, after getting it, proceed to the next location ... </p>
                        </div>
                    
                    </Col>
                    <Col lg = '4'>
                        <div className={`${styles.hunt}`}>
                            <h3>This week's hunt</h3>
                            <p>You're to get the white box from under osisioma flyover...</p>
                            <p>You'll be given a code to crack at the entrance to kilimanjaro at railway, after getting it, proceed to the next location ... </p>
                        </div>
                    
                    </Col>
                    <Col lg = '4'>
                       <div className={`${styles.notifications}`}>
                            <Row className='justify-content-center'>
                                <Col xs = 'auto'><h3 className={`${styles.notification_h3}`}>Notification</h3></Col>
                            </Row>
                            <div className={`${styles.notification}`}>
                                <Row className = "">
                                <Col xs = 'auto' className = "pe-0"><img src={avatar} alt="" className={`${styles.avatar}`}/></Col>
                                <Col className = "p-0 ms-2"><p className={`${styles.notification_title}`}>Crack It, Find It</p></Col>
                                <Col xs = "auto" className = "ms-auto"><p className={`${styles.notification_just_now}`}>Just now</p></Col>
                                </Row>
                                <Row>
                                    <Col xs = 'auto'><p className={`${styles.notification_sub_title}`}>A new hunt is available in your location...</p></Col>
                                    <Col xs ='auto'><p className={`${styles.notification_text}`}>This hunt is available for hunters within osisioma, It is open to all gender within the age of 20 - 40 . Click to view hunt...</p></Col>
                                </Row>

                            </div>
                            <div className={`${styles.notification}`}>
                                <Row className = "">
                                <Col xs = 'auto' className = "pe-0"><img src={avatar2} alt="" className={`${styles.avatar}`}/></Col>
                                <Col className = "p-0 ms-2"><p className={`${styles.notification_title}`}>Crack It, Find It</p></Col>
                                <Col xs = "auto" className = "ms-auto"><p className={`${styles.notification_just_now}`}>Just now</p></Col>
                                </Row>
                                <Row>
                                    <Col xs = 'auto'><p className={`${styles.notification_sub_title}`}>A new hunt is available in your location...</p></Col>
                                    <Col xs ='auto'><p className={`${styles.notification_text}`}>This hunt is available for hunters within osisioma, It is open to all gender within the age of 20 - 40 . Click to view hunt...</p></Col>
                                </Row>

                            </div>
                       </div>
                    </Col>
                </Row>
            </Col>


        </Row>

    </Container>
  )
}
