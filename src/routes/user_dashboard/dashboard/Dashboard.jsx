import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Dashboard.module.css';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import avatar from './dashboard_asset/avatar.png';
import avatar2 from './dashboard_asset/avatar2.png';



export default function UserDashboard() {
    const [userData, setUserData] = useState({});
    const [hunts, setHunts] = useState([]);
    const [loading, setLoading] = useState(true);
    const api = 'https://crackitfindit.rad5.com.ng';
    const navigate = useNavigate();

    
     //Offcanvas
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    useEffect( () =>{
        if (sessionStorage.Token){
             axios.get(api + '/api/user', { 
                 headers: {
                     Authorization: "Bearer " + sessionStorage.Token,
                     Accept: 'application/json'
                 }
              })
             .then(function (response) {
                 // handle success
                 console.log(response)
                //  setName(response.data.data.name);
                //  setAddress(response.data.data.address);
                //  setEmail(response.data.data.email)
                //  setPhone(response.data.data.phone)
                //  setStatus(response.data.data.payment.status)
                //  setAmount(response.data.data.payment.amount)
                //  setTransaction_id(response.data.data.payment.transaction_id)
                //  setCurrency(response.data.data.payment.currency)
                 setLoading(false)
                setUserData(response.data.data)
             })
             .catch(function (error) {
                 // handle error
                 console.log(error);
                 setLoading(false)
                //  navigate('/login')
             });
    
            // axios.get(api + '/api/hunts', { 
            //     headers: {
            //         Authorization: "Bearer " + sessionStorage.Token,
            //         Accept: 'application/json'
            //     }
            //  })
            // .then(function (response) {
            //     // handle success
            //     // setWaitHunt(false)
            //     // setHuntArray(response.data.data)
            //     // setShowHuntCategory(true)
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     // handle error
            //     console.log(error);
            //     // navigate('/login')
            // });
            }
        else{
            navigate('/login')
        }    
    }, []) 
  return (
        <>
            {
                loading ?
                <Container className='mt-5'>
                    <Row className='justify-content-center'>
                        <Col xs = 'auto'>
                          <Spinner animation='border' variant='warning' />
                        </Col>
                    </Row>
                </Container>
                 :
                <Container fluid>
                <Row className=''>
                    <UserSidebar show = {show} handleClose = {handleClose} active = 'Dashboard'/>
        
                    <Col style={{background:' #FFF9FF'}} className='ps-sm-5 pe-sm-5 pb-5 offset-sm-2 offset-lg-3'>
                        <DashboardNavbar handleShow={handleShow}/>
                        <Row className='mt-5 mb-2'>
                            <Col><p className={`${styles.welcome}`}>Welcome {userData.name},</p></Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs = '11'>
                                <Row className='justify-content-between'>
                                    <div className={`${styles.dashboard_details}`}>
                                        <Row className='justify-content-between'>
                                            {/* Ongoing hunt */}
                                            <div className={`${styles.dashboard_widget} mb-3`}>
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><p>Ongoing hunt</p></Col>
                                                </Row>
                                                <Row className='justify-content-center mb-4'>
                                                    <Col xs = '10' lg = '8'><button>23:34:40</button></Col>
                                                </Row>
                                                <Row className='justify-content-end'>
                                                    <Col xs = 'auto'><span className={`${styles.view_details}`}>Click to view details</span></Col>
                                                </Row>
                                                
                                            
                                            </div>

                                            {/* Active Hunt */}
                                            <div className={`${styles.dashboard_widget} mb-3`}>
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'>
                                                        <p>Active hunt</p>
                                                    </Col>
                                                </Row>
                                                 <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><span><Link to={`/user/hunts/day`}>Hunt for the day</Link></span></Col>
                                                 </Row>
                                                 <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><span><Link to={`/user/hunts/week`}>Hunt for the week</Link></span></Col>
                                                 </Row>
                                                 <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><span><Link to={`/user/hunts/week`}>Hunt for the year</Link></span></Col>
                                                 </Row>
                                            </div>

                                            {/* Upcoming hunt */}
                                            <div className={`${styles.dashboard_widget}`}>
                                                <Row>
                                                    <Col>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'><p>Upcoming hunt</p></Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'><span>Hunt for the day</span></Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Task</small> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Date</small> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Duration</small> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Prize</small> </Col>
                                                        </Row>
                                            
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'><p>Upcoming hunt</p></Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'><span>Hunt for the day</span></Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Task</small> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Date</small> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Duration</small> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <small>Prize</small> </Col>
                                                        </Row>
                                            
                                                    </Col>
                                                </Row>
                                            
                                            </div>

                                             {/* Notification */}
                                             <div className={`${styles.dashboard_widget}`}>
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><p>Notification</p></Col>
                                                </Row>
                                            
                                            </div>

                                        </Row>
                                    </div>
                                    <div xs = '4' className={`${styles.dashboard_profile}`}>
                                        <Row className='justify-content-center'>
                                            <Col xs = 'auto'><p>Profile</p></Col>
                                        </Row>
                                    
                                    </div>
                                </Row>
                            </Col>
                        </Row>
        
                        <Row className='justify-content-center d-none'>
                            <Col xs = '10' className={`${styles.no_hunt}`}>
                                <p>No active hunt</p>
                            </Col>
                        </Row>
                    </Col>
        
        
                </Row>
        
                </Container>
            }
        </>
  )
}
