import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import styles from './Hunts.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

export default function AdminHunts() {
  return (
   
    <Container fluid className={`${styles.admin_hunts_container}`}>
        <Row>
            <AdminSidebar active = 'Hunts'/>
            <Col className='ps-4 py-4'>
                <DashboardNavbar />
                <Row>
                    <Col xs = '11' lg = '9'>
                        <Row className='mt-5'>
                        <Col><p className={`${styles.create_hunt}`}>Create Hunt</p></Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <select name="" id="">
                                    <option value="">Category</option>
                                    <option value="">Hunt for the Day</option>
                                    <option value="">Hunt for the Week</option>
                                    <option value="">Hunt for the Month</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                             <input type="text" placeholder='Hunt Title' className={`${styles.admin_hunts_containerinput}`}/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Hunt Description'></textarea>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <select name="" id="">
                                    <option value="">Requirement</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <select name="" id="">
                                    <option value="">Reward</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <select name="" id="">
                                    <option value="">Duration</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='justify-content-center mb-5'>
                            <Col xs ='9' lg = '3'>
                                <Link to = '/admin/hunts'><button className={`${styles.hunt_btn}`}>Create Hunts</button></Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col><p className={`${styles.create_hunt}`}>Reward Hunt</p></Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col xs = '12' className='mb-3'>
                                <input type="text" placeholder='Iwuanyanwu Claire' className={`${styles.admin_hunts_containerinput}`}/>
                            </Col>
                            <Col xs = '12' >
                            <select name="" id="">
                                    <option value="">Category</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs ='9' lg = '3'>
                                 <Link to = '/admin/hunts'><button className={`${styles.hunt_btn}`}>Reward</button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
