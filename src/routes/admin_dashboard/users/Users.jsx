import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

import styles from './Users.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

import profile from './asset/profile_icon.svg';
import message from './asset/message.png';
import view from './asset/view.png';

export default function Users() {
    const [loading, setLoading] = useState(true);
    const [userArray, setUserArray] = useState([])
    //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() =>{
        axios.get('https://crackitfindit.rad5.com.ng/api/users', { 
            headers: {
                Authorization: "Bearer " + sessionStorage['Admin-Token'],
                Accept: 'application/json'
            }
         })
        .then(function (response) {
            // handle success
            setLoading(false)
            console.log(response.data.data)
            setUserArray(response.data.data)
            
        })
        .catch(function (error) {
            // handle error
            setLoading(false)
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }, [])

  return (
    <>

    {
        loading ? 
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Spinner  variant = 'warning'/>
            </Row>
        </Container>
        :
        <Container fluid className={`${styles.profile}`}>
            <Row>
                <AdminSidebar active = 'Users' show = {show} handleClose = {handleClose}/>
                <Col className='offset-sm-2 offset-lg-3 ps-4'>
                    <DashboardNavbar  handleShow={handleShow}/>

                    <Row className='align-items-center mb-5 border'>
                        <Col xs = 'auto' className='p-0'>
                            <p className={`${styles.profile_title}`}>Users</p>
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
                        <Col xs = '11'>
                           {
                            userArray.map((user, index) => {
                                return(
                                    <Row key = {index} className={`${styles.user_row} align-items-center mb-4 px-2 py-3 px-sm-4`}>
                                    <Col xs = 'auto' className={`${styles.profile_icon_col} p-0`}>
                                        <img src={profile} alt="" className=' w-100'/>
                                    </Col>
                                    <Col xs = 'auto'>
                                        <p className={`${styles.profile_name} mb-1`}>{user.name}</p>
                                        <p className={`${styles.profile_desc}`}>-</p>
                                    </Col>
                                    <Col xs = 'auto' className='ms-auto'>
                                        <button className={`${styles.profile_btn} mb-2 `}>
                                            <span className='me-2 d-none d-sm-inline'>Message</span>
                                            <span><img src={message} alt="" /></span>
                                        </button>
                                        <button className={`${styles.profile_btn}`}>
                                            <span className='me-2 d-none d-sm-inline'>View</span>
                                            <span><img src={view} alt="" /></span>
                                        </button>
                                    </Col>
                                </Row>
                                )
                            })
                           }
                           
                        </Col>
                    </Row>        
                
                </Col>
            </Row>
         </Container>
    }
    
    </>
    )
}
