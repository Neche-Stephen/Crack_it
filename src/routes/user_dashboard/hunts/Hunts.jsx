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

    const [mainDailyHunt, setMainDailyHunt] = useState({});
    const [mainWeeklyHunt, setMainWeeklyHunt] = useState([]);
    const [mainMonthlyHunt, setMainMonthlyHunt] = useState([]);



    const navigate = useNavigate();
    const api = import.meta.env.VITE_APP_API_URL
     //Offcanvas
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     
      const setMainHunts = ()=>{
            // set Main Daily Hunt
            // Sort the array based on date_created
            let newDailyHunt = dailyHunt;
            console.log("Inside setmainhunts")
            newDailyHunt.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
            // let mainHunt;
            if (newDailyHunt.length > 0) {
                // Return the object with the latest date_created
                // mainHunt = hunts[0];
                setMainDailyHunt(newDailyHunt[0]);
                console.log("setted main daily hunt")

            } else {
                // mainHunt = {}
                setMainDailyHunt({});
            }

            let newWeeklyHunt = weeklyHunt;
            newWeeklyHunt.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
            // let mainHunt;
            if (newWeeklyHunt.length > 0) {
                // Return the object with the latest date_created
                // mainHunt = hunts[0];
                setMainWeeklyHunt(newWeeklyHunt[0]);

            } else {
                // mainHunt = {}
                setMainWeeklyHunt({});
            }

            let newMonthlyHunt = monthlyHunt;
            newMonthlyHunt.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
            // let mainHunt;
            if (newMonthlyHunt.length > 0) {
                // Return the object with the latest date_created
                // mainHunt = hunts[0];
                setMainMonthlyHunt(newMonthlyHunt[0]);

            } else {
                // mainHunt = {}
                setMainMonthlyHunt({});
            }
      }

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
                setMainHunts();
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
                               <Link to={`/user/hunts/day`} state={{hunt : mainDailyHunt}}><img src={hunt_day} alt="" className='w-100'/></Link>
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
