import React, {useEffect, useState} from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './HuntsType.module.css'


import UserSidebar from '../../../../components/user/userSidebar/UserSidebar';
import DashboardNavbar from '../../../../components/general/dashboard_navbar/DashboardNavbar';

import left_arrow from './asset/left_arrow.png'

export default function HuntsType(props) {
    // Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    useEffect(()=>{
        if (!sessionStorage.Token){
           navigate('login'); 
        }
    }, [])

    const { hunt_type } = useParams();
   
  return (
    
    <div className={`${styles.today_challenge_body} container-fluid`}>
       <Row>
            <UserSidebar show = {show} handleClose = {handleClose} active='Hunts'/>
            <Col className='offset-sm-2 offset-lg-3'>
                <DashboardNavbar handleShow={handleShow}/>
                <Row className='justify-content-center mt-5 mb-5'>
                    <Col xs = '10' className={`${styles.challange_main} py-5`}>
                        <div className={`${styles.today_challenge_row} row mb-3 align-items-center` }>
                            <div className='col-2 col-md-1 col-lg-1 d-none d-sm-block' >
                                <Link to='/user/hunts'><img src={left_arrow} alt="" className='w-100'/></Link>
                            </div>

                            <div className='col-auto mx-auto'>
                                <p className={`${styles.today_challenge_title}`}>Hunt for the {hunt_type}</p>
                            </div>
                        </div>

                        <Row className='justify-content-center'>
                            <Col xs = 'auto'>
                                <p className={`${styles.today_challenge_task}`}>Find the Box under the Osisioma bridge</p>
                            </Col>
                        </Row>

                        <Row className={`${styles.challange_details} justify-content-center`}>
                            <Col xs = "10" lg = "6">
                            <p>Your journey starts from railway, get the code from the MTN shop and crack it. Proceed to get the second code at the gate of star paper mill and crack it...  </p>
                            </Col>
                        </Row>

                        <Row className={`${styles.challange_details} justify-content-center`}>
                            <Col xs = "10" lg = "6">
                            <p>Participants from 18 and above are allowed to participate</p>
                            </Col>
                        </Row>

                        <Row className={`${styles.challange_details} justify-content-center`}>
                            <Col xs = "10" lg = "6">
                            <p>Your reward is a Cash price.</p>
                            </Col>
                        </Row>

                        <Row className='justify-content-center'>
                            <Col xs = '10' lg = '3'>
                            <button>Participate</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
       </Row>
      
    </div>
  
  )
}

// MonthlyQuestModal
// WeeklyQuestModal