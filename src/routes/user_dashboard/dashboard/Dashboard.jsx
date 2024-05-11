import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Spinner, Dropdown} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Timer from './Timer';

import styles from './Dashboard.module.css';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import avatar from './dashboard_asset/avatar.svg';



export default function UserDashboard() {
    const [userData, setUserData] = useState({});
    const [hunts, setHunts] = useState([]);
    const [loading, setLoading] = useState(true);
    const api = import.meta.env.VITE_APP_API_URL
    const navigate = useNavigate();

    
     //Offcanvas
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const [dailyHunt, setDailyHunt] = useState([]);
     const [weeklyHunt, setWeeklyHunt] = useState([]);
     const [monthlyHunt, setMonthlyHunt] = useState([]);
     const [generalHunt, setGeneralHunt] = useState([]);

     const [dailyUpcomingHunt, setDailyUpcomingHunt] = useState([]);
     const [weeklyUpcomingHunt, setWeeklyUpcomingHunt] = useState([]);
     const [monthlyUpcomingHunt, setMonthlyUpcomingHunt] = useState([]);
     const [generalUpcomingHunt, setGeneralUpcomingHunt] = useState([]);

     const [ongoingHunt, setOngoingHunt] = useState({}); // This is a select hunt (based on earliest date) from the daily hunt that is set as ongoing hunt
     

    const getOngoingHunt = ()=>{
        console.log("ongoing hunt call");
        
        if(dailyHunt.length > 0){
            // Sort the array based on date_created
        let newDailyHunt = dailyHunt;
        console.log("newdailt1",newDailyHunt)
        newDailyHunt.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
        console.log("newdailt2",newDailyHunt)
        let mainHunt;
        if (newDailyHunt.length > 0) {
        console.log("newdailt3",newDailyHunt)
            // Return the object with the latest date_created
            mainHunt = newDailyHunt[0];
            console.log("easy", mainHunt);

            setOngoingHunt(mainHunt);

        } else {
            mainHunt = {}
            console.log("did not work");
        }
       
        }
        else if(weeklyHunt.length > 0){
            // Sort the array based on date_created
        let newHunt = weeklyHunt;
        console.log("newdailt1",newHunt)
        newHunt.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
        console.log("newdailt2",newHunt)
        let mainHunt;
        if (newHunt.length > 0) {
        console.log("newdailt3",newDailyHunt)
            // Return the object with the latest date_created
            mainHunt = newHunt[0];
            console.log("easy", mainHunt);

            setOngoingHunt(mainHunt);

        } else {
            mainHunt = {}
            console.log("did not work");
        }
        }
        else if(monthlyHunt.length > 0){
            // Sort the array based on date_created
        let newHunt = monthlyHunt;
        console.log("newdailt1",newHunt)
        newHunt.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
        console.log("newdailt2",newHunt)
        let mainHunt;
        if (newHunt.length > 0) {
        console.log("newdailt3",newDailyHunt)
            // Return the object with the latest date_created
            mainHunt = newHunt[0];
            console.log("easy", mainHunt);

            setOngoingHunt(mainHunt);

        } else {
            mainHunt = {}
            console.log("did not work");
        }
        }
    }

     function formatDate(dateString) {
        // Convert ISO 8601 format to Date object
        const date = new Date(dateString);
    
        // Define months array for formatting
        const months = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
    
        // Extract components from the Date object
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
    
        // Format the date as desired
        return `${month} ${day}, ${year}`;
    }

    const fetchUpcomingHunts = () => {
        axios.get(api + '/api/upcoming-hunts', { 
            headers: {
                Authorization: "Bearer " + sessionStorage.Token,
                Accept: 'application/json'
            }
         })
        .then(function (response) {
            console.log(response.data.data)
            response.data.data.map((hunt => {
                if(hunt.hunt_category_title === 'Hunt for the day'){
                    setDailyUpcomingHunt(hunt.hunts)
                }
                else if (hunt.hunt_category_title === 'Hunt for the week'){
                    setWeeklyUpcomingHunt(hunt.hunts);
                }
                else if (hunt.hunt_category_title === 'Hunt for the month'){
                    setMonthlyUpcomingHunt(hunt.hunts);
                }
            }))

            let generalHunt = []
            response.data.data.map((hunt) =>{
                generalHunt.push(...hunt.hunts)
            })
            // console.log(generalHunt)
            setGeneralUpcomingHunt(generalHunt);
            setLoading(false);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            setLoading(false)


            // navigate('/login')
        });
    }

    const goToOngoingHunt = () =>{
    navigate(`/user/hunts/ongoing`, { state: {hunt:ongoingHunt} });
    }

    useEffect( () =>{
        // Validate and Fetch user info
        if (sessionStorage.Token){
             axios.get(api + '/api/user', { 
                 headers: {
                     Authorization: "Bearer " + sessionStorage.Token,
                     Accept: 'application/json'
                 }
              })
             .then(function (response) {
                 // handle success
                 console.log(response.data.data)
                //  setName(response.data.data.name);
                //  setAddress(response.data.data.address);
                //  setEmail(response.data.data.email)
                //  setPhone(response.data.data.phone)
                //  setStatus(response.data.data.payment.status)
                //  setAmount(response.data.data.payment.amount)
                //  setTransaction_id(response.data.data.payment.transaction_id)
                //  setCurrency(response.data.data.payment.currency)
                setUserData(response.data.data)
             })
             .catch(function (error) {
                 // handle error
                 console.log(error);
                //  navigate('/login')
             });
    
             // Get Active Hunts
             axios.get(api + '/api/hunts', { 
                headers: {
                    Authorization: "Bearer " + sessionStorage.Token,
                    Accept: 'application/json'
                }
             })
            .then(function (response) {
                console.log("hunts",response.data.data)
                response.data.data.map((hunt => {
                    if(hunt.hunt_category_title === 'Hunt for the day'){
                        setDailyHunt(hunt.hunts);
                        
                    }
                    else if (hunt.hunt_category_title === 'Hunt for the week'){
                        setWeeklyHunt(hunt.hunts);
                    }
                    else if (hunt.hunt_category_title === 'Hunt for the month'){
                        setMonthlyHunt(hunt.hunts);
                    }
                }))

                let generalHunt = []
                response.data.data.map((hunt) =>{
                    generalHunt.push(...hunt.hunts)
                })
                // console.log(generalHunt)
                setGeneralHunt(generalHunt);
                // setOngoingHunt(); 
                setLoading(false)


            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoading(false)


                // navigate('/login')
            });

            // Get Upcoming Hunts
            fetchUpcomingHunts();
            }
        else{
            navigate('/login')
        }    
    }, []);

    useEffect(() => {
        console.log("second useeffect")
        getOngoingHunt();
    }, [dailyHunt]);


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
                                                    <Col xs = '10' lg = '8'>
                                                        {/* <button>23:34:40</button> */}
                                                        <button><Timer expiration={ongoingHunt.expiration} /></button>
                                                    </Col>
                                                </Row>
                                                <Row className='justify-content-end'>
                                                    <Col xs = 'auto'>
                                                        <span style={{cursor:"pointer"}} className={`${styles.view_details}`} onClick={goToOngoingHunt}>Click to view details</span>
                                                        {/* <Link to={`/user/hunts/week`} state={{hunt : hunt}}>{hunt.title} - {ongoingHunt.audience}</Link> */}
                                                        
                                                    </Col>
                                                </Row>
                                                
                                            
                                            </div>
                                            {/* Active Hunt */}
                                            <div className={`${styles.dashboard_widget} mb-3`}>
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'>
                                                        <p>Active hunts</p>
                                                    </Col>
                                                </Row>
                                                 <Row className='justify-content-center'>
                                                    {/* <Col xs = 'auto'><span><Link to={`/user/hunts/day`} state={{hunts : dailyHunt}}>Hunt for the day</Link></span></Col> */}
                                                    <Col xs = 'auto'><span>
                                                        {/* <Link to={`/user/hunts/day`} state={{hunts : dailyHunt}}>Hunt for the day</Link> */}
                                                            <Dropdown>
                                                                <Dropdown.Toggle className={`${styles.active_hunts}`} id="dropdown-basic">
                                                                     Hunt for the day
                                                                </Dropdown.Toggle>

                                                                    <Dropdown.Menu>

                                                                        {
                                                                            dailyHunt.map((hunt)=>{
                                                                                 return <Dropdown.Item as={Link} to={`/user/hunts/day`} state={{hunt : hunt}}>{hunt.title} - {hunt.audience}</Dropdown.Item>
                                                                            })
                                                                        }                               
                                                                    </Dropdown.Menu>
                                                            </Dropdown>
                                            
                                                            </span>
                                                        </Col>

                                                 </Row>
                                                 <Row className='justify-content-center'>
                                                    {/* <Col xs = 'auto'><span><Link to={`/user/hunts/week`} state={{hunts : weeklyHunt}}>Hunt for the week</Link></span></Col> */}
                                                    <Col xs = 'auto'><span>
                                                            <Dropdown>
                                                                <Dropdown.Toggle className={`${styles.active_hunts}`} id="dropdown-basic">
                                                                     Hunt for the Week
                                                                </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        {
                                                                            weeklyHunt.map((hunt)=>{
                                                                                 return <Dropdown.Item as={Link} to={`/user/hunts/week`} state={{hunt : hunt}}>{hunt.title} - {hunt.audience}</Dropdown.Item>
                                                                            })
                                                                        }                               
                                                                    </Dropdown.Menu>
                                                            </Dropdown>
                                            
                                                            </span>
                                                        </Col>
                                                 </Row>
                                                 <Row className='justify-content-center'>
                                                    {/* <Col xs = 'auto'><span><Link to={`/user/hunts/week`} state={{hunts : monthlyHunt}}>Hunt for the year</Link></span></Col> */}
                                                    <Col xs = 'auto'><span>
                                                            <Dropdown>
                                                                <Dropdown.Toggle className={`${styles.active_hunts}`} id="dropdown-basic">
                                                                     Hunt for the month
                                                                </Dropdown.Toggle>

                                                                    <Dropdown.Menu>

                                                                        {
                                                                            monthlyHunt.map((hunt)=>{
                                                                                 return <Dropdown.Item as={Link} to={`/user/hunts/month`} state={{hunt : hunt}}>{hunt.title} - {hunt.audience}</Dropdown.Item>
                                                                            })
                                                                        }                               
                                                                    </Dropdown.Menu>
                                                            </Dropdown>
                                            
                                                            </span>
                                                        </Col>
                                                 </Row>
                                            </div>

                                            {/* Upcoming hunt */}
                                            {/* <div className={`${styles.dashboard_widget}`}>
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><p>Upcoming hunt</p></Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'><span>Hunt for the day</span></Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Task</div> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Date</div> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Duration</div> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Prize</div> </Col>
                                                        </Row>
                                            
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'><span>Hunt for the day</span></Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Task</div> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Date</div> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Duration</div> </Col>
                                                        </Row>
                                                        <Row className='justify-content-center'>
                                                            <Col xs = 'auto'> <div className={`${styles.upcoming}`}>Prize</div> </Col>
                                                        </Row>
                                            
                                                    </Col>
                                                </Row>
                                            
                                            </div> */}

                                             {/* Upcoming - Notification  - I am now using notification as my upcoming hunt, so you will find a lot of clas still name with notification*/}
                                             <div className={`${styles.upcoming_hunts} ${styles.dashboard_widget}`} style={{overflow:'scroll'}}>
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><p>Upcoming Hunts</p></Col>
                                                </Row>

                                                {
                                                   generalUpcomingHunt.length !== 0
                                                   ?
                                                   generalUpcomingHunt.map((hunt, index) => {
                                                    return (
                                                        <div key={index} className={`${styles.notification_row} mb-3`}>
                                                            <div className={`${styles.notification_row_first}`}>
                                                                {/* <div className={`${styles.notification_avatar}`}>
                                                                    <img src={avatar} alt="" className='w-100'/>
                                                                </div> */}
                                                                <div className={`${styles.notification_title} ms-2`}>
                                                                    Crack It, Find It
                                                                </div>
                                                                <div className={`${styles.notification_time} ms-auto`}>{formatDate(hunt.date_created)}</div>
                                                            </div>
                                                            <div className={`${styles.notification_row_second}`}>
                                                                <div className={`${styles.notification_sub_title} ms-2`}>
                                                                {hunt.title}
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.notification_row_third}`}>
                                                                <div className={`${styles.notification_description} ms-2`}>
                                                                    {hunt.description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                                :
                                                <Row className='justify-content-center'>
                                                    <Col xs = 'auto'><small>No notifications</small></Col>
                                                </Row>
                                                
                                                }


                                            </div>

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
