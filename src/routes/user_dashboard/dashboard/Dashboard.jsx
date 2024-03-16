import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
        
                    <Col className='ps-sm-4 pe-sm-5 pb-5 offset-sm-2 offset-lg-3'>
                        <DashboardNavbar handleShow={handleShow}/>
                        <Row className='mt-5 mb-2'>
                            <Col><p className={`${styles.welcome}`}>Welcome {userData.name},</p></Col>
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
                        <Row className='d-none'>
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
        
                        <Row className='justify-content-center'>
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
