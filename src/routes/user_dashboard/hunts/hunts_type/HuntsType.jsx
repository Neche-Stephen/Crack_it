import React, {useEffect, useState} from 'react';
import { Modal, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './HuntsType.module.css'


import UserSidebar from '../../../../components/user/userSidebar/UserSidebar';
import DashboardNavbar from '../../../../components/general/dashboard_navbar/DashboardNavbar';

import left_arrow from './asset/left_arrow.png'

export default function HuntsType(props) {
    // Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [hunt, setHunt] = useState({});

    const [loadingHuntTypes, setLoadingHuntTypes] = useState(true);


    const navigate = useNavigate();
    const {state} = useLocation();

    // Sort the array based on date_created
    // hunts.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));

    // let mainHunt;
    // if (hunts.length > 0) {
    //     // Return the object with the latest date_created
    //     mainHunt = hunts[0];

    //   } else {
    //     mainHunt = {}
    //   }

    function YouTubeGetID(url){
        console.log(url);
        var videoURL = url;
        let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
        var videoId = regex.exec(videoURL)[3];
        console.log(videoId);
        return videoId;
     }
   
    useEffect(()=>{
        if (!sessionStorage.Token){
           navigate('login'); 
        }

        setHunt(state.hunt);
        setLoadingHuntTypes(false);
        console.log("passed hunt",state.hunt);
    }, [])

    const { hunt_type } = useParams();
   
  return (
    
    <div className={`${styles.today_challenge_body} container-fluid`}>
       <Row>
            <UserSidebar show = {show} handleClose = {handleClose} active='Hunts'/>
            <Col className='offset-sm-2 offset-lg-3'>
                <DashboardNavbar handleShow={handleShow}/>
                {
                    loadingHuntTypes ?
                    <Row className='justify-content-center'>
                        <Col xs = "auto">
                            <Spinner />
                        </Col>
                    </Row> :
                    <Row className='justify-content-center mt-5 mb-5'>
                        <Col xs = '10' className={`${styles.challange_main} py-5`}>
                            <div className={`${styles.today_challenge_row} row mb-3 align-items-center` }>
                                <div className='col-2 col-md-1 col-lg-1 d-none d-sm-block' >
                                    <Link to='/user/dashboard'><img src={left_arrow} alt="" className='w-100'/></Link>
                                </div>

                                <div className='col-auto mx-auto'>
                                    <p className={`${styles.today_challenge_title}`}>{
                                        hunt_type !== "ongoing" ?
                                            hunt_type !== "upcoming" ?
                                                "Hunt for the " + hunt_type : "Upcoming Hunt"
                                        
                                        : "Ongoing Hunt"
                                    }</p>
                                </div>
                            </div>

                            <Row className='justify-content-center'>
                                <Col xs = 'auto'>
                                    {/* <p className={`${styles.today_challenge_task}`}>Find the Box under the Osisioma bridge</p> */}
                                    <p className={`${styles.today_challenge_task}`}>{
                                    hunt.title ? hunt.title + " - " + hunt.audience : <small>No hunt avalable</small>
                                    
                                    }</p>
                                </Col>
                            </Row>

                            <Row className={`${styles.challange_details} justify-content-center`}>
                                <Col xs = "10" lg = "6">
                                {/* <p>Your journey starts from railway, get the code from the MTN shop and crack it. Proceed to get the second code at the gate of star paper mill and crack it...  </p> */}
                                <p>{hunt.description}</p>
                                </Col>
                            </Row>

                            {/* <Row className={`${styles.challange_details} justify-content-center`}>
                                <Col xs = "10" lg = "6">
                                <p>{hunt.audience}</p>
                                </Col>
                            </Row> */}

                            <Row className={`${styles.challange_details} justify-content-center`}>
                                <Col xs = "10" lg = "9">
                                {/* <p>Participants from 18 and above are allowed to participate</p> */}
                                    <div className={`${styles.challange_details_img}`}>
                                        <img src={hunt.image_url} alt="" className='w-100'/>
                                    </div>
                                </Col>
                            </Row>

                            <Row className={`${styles.challange_details} justify-content-center mt-3`}>
                                <Col xs = "10" lg = "9" className=''>
                                {hunt.youtube_url && (
                                    <iframe
                                        width="100%"
                                        height="300"
                                        src={`https://www.youtube.com/embed/${YouTubeGetID(hunt.youtube_url)}`}
                                        title="YouTube video player"
                                        allowFullScreen
                                    />
                                )}
                                </Col>
                            </Row>
                            {/* yla5-_61ndc */}

                            

                            <Row className={`${styles.challange_details} justify-content-center`}>
                                <Col xs = "10" lg = "6">
                                {/* <p>Your reward is a Cash price.</p> */}
                                <p>-</p>
                                </Col>
                            </Row>

                            {/* <Row className='justify-content-center'>
                                <Col xs = '10' lg = '3'>
                                <button>Participate</button>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                }
            </Col>
       </Row>
      
    </div>
  
  )
}

// MonthlyQuestModal
// WeeklyQuestModal