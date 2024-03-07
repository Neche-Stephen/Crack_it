import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Profile.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

import profile from './asset/profile.png';
import message from './asset/message.png';
import view from './asset/view.png';

export default function Profile() {
  return (
    <Container fluid className={`${styles.profile}`}>
        <Row>
            <AdminSidebar active = 'Profile'/>
            <Col className='offset-3'>
                <DashboardNavbar />

                <Row className='align-items-center mb-5 pe-2'>
                    <Col xs = 'auto'>
                        <p className={`${styles.profile_title}`}>My profile</p>
                    </Col>
                    <Col xs = 'auto' className='ms-auto'>
                        <input type="text" placeholder='Search name'/>
                    </Col>

                    <Col xs = 'auto'>
                        <span className={`${styles.count}`}>1 - 4 of 1000</span>
                        {/* <span>  </span> */}
                    </Col>
                </Row>

                <Row className=''>
                    <Col xs = '9'>
                        <Row className='align-items-center mb-4 ps-5 pe-4'>
                            <Col xs = 'auto'>
                                <img src={profile} alt="" />
                            </Col>
                            <Col xs = 'auto'>
                                <p className={`${styles.profile_name}`}>Kaka Claire</p>
                                <p className={`${styles.profile_desc}`}>Enthusiast</p>
                            </Col>
                            <Col xs = 'auto' className='ms-auto'>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>Message</span>
                                    <span><img src={message} alt="" /></span>
                                </button>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>View</span>
                                    <span><img src={view} alt="" /></span>
                                </button>
                            </Col>
                        </Row>
                        <Row className='align-items-center mb-4 ps-5 pe-4'>
                            <Col xs = 'auto'>
                                <img src={profile} alt="" />
                            </Col>
                            <Col xs = 'auto'>
                                <p className={`${styles.profile_name}`}>Kaka Claire</p>
                                <p className={`${styles.profile_desc}`}>Enthusiast</p>
                            </Col>
                            <Col xs = 'auto' className='ms-auto'>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>Message</span>
                                    <span><img src={message} alt="" /></span>
                                </button>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>View</span>
                                    <span><img src={view} alt="" /></span>
                                </button>
                            </Col>
                        </Row>
                        <Row className='align-items-center mb-4 ps-5 pe-4'>
                            <Col xs = 'auto'>
                                <img src={profile} alt="" />
                            </Col>
                            <Col xs = 'auto'>
                                <p className={`${styles.profile_name}`}>Kaka Claire</p>
                                <p className={`${styles.profile_desc}`}>Enthusiast</p>
                            </Col>
                            <Col xs = 'auto' className='ms-auto'>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>Message</span>
                                    <span><img src={message} alt="" /></span>
                                </button>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>View</span>
                                    <span><img src={view} alt="" /></span>
                                </button>
                            </Col>
                        </Row>
                        <Row className='align-items-center mb-4 ps-5 pe-4'>
                            <Col xs = 'auto'>
                                <img src={profile} alt="" />
                            </Col>
                            <Col xs = 'auto'>
                                <p className={`${styles.profile_name}`}>Kaka Claire</p>
                                <p className={`${styles.profile_desc}`}>Enthusiast</p>
                            </Col>
                            <Col xs = 'auto' className='ms-auto'>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>Message</span>
                                    <span><img src={message} alt="" /></span>
                                </button>
                                <button className={`${styles.profile_btn} mb-2`}>
                                    <span className='me-2'>View</span>
                                    <span><img src={view} alt="" /></span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                
            
            </Col>
        </Row>
    </Container>
    )
}
