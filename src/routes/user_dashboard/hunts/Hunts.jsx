import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Modal, Spinner } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import styles from './Hunts.module.css';

import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import DefaultQuestModal from '../../../components/user/DefaultQuestModal/DefaultQuestModal';
import DailyQuestModal from '../../../components/user/DailyQuestModal/DailyQuestModal';
import TodayChallengeModal from '../../../components/user/DailyQuestModal/TodayChallengeModal/TodayChallengeModal';
import MonthlyQuestModal from '../../../components/user/MonthlyQuestModal/MonthlyQuestModal';
import WeeklyQuestModal from '../../../components/user/WeeklyQuestModal/WeeklyQuestModal';

import hunt_day from './hunt_asset/hunt_day.png';
import hunt_week from './hunt_asset/hunt_week.png';
import hunt_month from './hunt_asset/hunt_month.png';


export default function Hunts() {
    const [defaultQuestModalShow, setDefaultModalShow] = React.useState(false);
    const [dailyQuestModalShow, setDailyQuestModalShow] = React.useState(false);
    const [todayDailyChallenge, setTodayDailyChallenge] = React.useState(false);
    const [weeklyQuestModalShow, setWeeklyQuestModalShow] = React.useState(false);
    const [monthlyQuestModalShow, setMonthlyQuestModalShow] = React.useState(false);
    const [loadingHunts, setLoadingHunts] = useState(true);
    const [dailyHunt, setDailyHunt] = useState([]);
    const [weeklyHunt, setWeeklyHunt] = useState([]);
    const [monthlyHunt, setMonthlyHunt] = useState([]);

    const navigate = useNavigate();
    const api = 'https://crackitfindit.rad5.com.ng';
     //Offcanvas
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    useEffect(()=>{
        if (sessionStorage.Token){
            
            axios.get(api + '/api/hunts', { 
                headers: {
                    Authorization: "Bearer " + sessionStorage.Token,
                    Accept: 'application/json'
                }
             })
            .then(function (response) {
                // handle success
                // setWaitHunt(false)
                // setHuntArray(response.data.data)
                // setShowHuntCategory(true)
                response.data.data.map((hunt => {
                    if(hunt.hunt_category_title === 'Hunt for the day'){
                        setDailyHunt(hunt.hunts)
                    }
                    else if (hunt.hunt_category_title === 'Hunt for the week'){
                        setWeeklyHunt(hunt.hunts);
                    }
                    else if (hunt.hunt_category_title === 'Hunt for the month'){
                        setMonthlyHunt(hunt.hunts);
                    }
                }))
                setLoadingHunts(false);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoadingHunts(false);

                // navigate('/login')
            });
        }
        else{
            navigate('/login')
        }
    }, [])

  return (
        <>
        
            {
                loadingHunts ?
                <Container className='mt-5'>
                    <Row className='justify-content-center'>
                        <Col xs = 'auto'>
                          <Spinner animation='border' variant='warning' />
                        </Col>
                    </Row>
                </Container>
                :
                <Container fluid>
                <Row>
                    <UserSidebar show = {show} handleClose = {handleClose} active = "Hunts"/>
                    <Col className='offset-sm-2 offset-lg-3'>
                        <DashboardNavbar handleShow={handleShow}/>
                        <Row>
                            <Col xs = '12' lg = '6'>
                               <Link to={`/user/hunts/day`} state={{hunts : dailyHunt}}><img src={hunt_day} alt="" className='w-100'/></Link>
                            </Col>
                            <Col xs = '12' lg = '6'>
                                <Link to={`/user/hunts/week`} state={{hunts : weeklyHunt}}><img src={hunt_week} alt="" className='w-100'/></Link>
                            </Col>
                            <Col xs = '12' lg = '6'>
                                <Link to={`/user/hunts/month`} state={{hunts : monthlyHunt}}><img src={hunt_month} alt="" className='w-100'/></Link>
                            </Col>
                        </Row>
                        <DailyQuestModal 
                        show={dailyQuestModalShow}
                        onHide={() => setDailyQuestModalShow(false)}/>
        
                        <TodayChallengeModal 
                            show={todayDailyChallenge}
                            onHide={() => setTodayDailyChallenge(false)}
                            />
        
                        <DefaultQuestModal 
                            show={defaultQuestModalShow}
                            onHide={() => setDefaultModalShow(false)}
                            />
        
                        <WeeklyQuestModal 
                        show={weeklyQuestModalShow}
                        onHide={() => setWeeklyQuestModalShow(false)}/>
        
                        <MonthlyQuestModal 
                        show={monthlyQuestModalShow}
                        onHide={() => setMonthlyQuestModalShow(false)}/>
        
                    </Col>
                </Row>
            </Container>
            }

        </>
  )
}
