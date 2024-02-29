import React from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Hunts.module.css';

import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import DailyQuestModal from '../../../components/user/DailyQuestModal/DailyQuestModal';
import TodayChallengeModal from '../../../components/user/DailyQuestModal/TodayChallengeModal/TodayChallengeModal';
import MonthlyQuestModal from '../../../components/user/MonthlyQuestModal/MonthlyQuestModal';
import WeeklyQuestModal from '../../../components/user/WeeklyQuestModal/WeeklyQuestModal';

import hunt_day from './hunt_asset/hunt_day.png';
import hunt_week from './hunt_asset/hunt_week.png';
import hunt_month from './hunt_asset/hunt_month.png';


export default function Hunts() {
    const [dailyQuestModalShow, setDailyQuestModalShow] = React.useState(false);
    const [todayDailyChallenge, setTodayDailyChallenge] = React.useState(false);
    const [weeklyQuestModalShow, setWeeklyQuestModalShow] = React.useState(false);
    const [monthlyQuestModalShow, setMonthlyQuestModalShow] = React.useState(false);

  return (
    <Container fluid>
        <Row>
            <UserSidebar active = "Hunts"/>
            <Col>
                <DashboardNavbar />
                <Row>
                    <Col xs = '6'>
                        <img src={hunt_day} alt="" className='w-100' onClick={() => setTodayDailyChallenge(true)}/>
                    </Col>
                    <Col xs = '6'>
                        <img src={hunt_week} alt="" className='w-100' onClick={() => setWeeklyQuestModalShow(true)}/>
                    </Col>
                    <Col xs = '6'>
                        <img src={hunt_month} alt="" className='w-100' onClick={() => setMonthlyQuestModalShow(true)}/>
                    </Col>
                </Row>
                <DailyQuestModal 
                show={dailyQuestModalShow}
                onHide={() => setDailyQuestModalShow(false)}/>

                <TodayChallengeModal 
                    show={todayDailyChallenge}
                    onHide={() => setTodayDailyChallenge(false)}
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
  )
}
