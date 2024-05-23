import React, {useEffect, useState, useRef} from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import axios from 'axios';

import styles from './Hunts.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';


const defaultHuntDetails = {
    category_id: '',
    audience : '',
    start_date: '',
    expiration: '',
    title:'',
    hunt_youtube_url:'',
    description: '',
}

const defaultUpcomingHuntDetails = {
    upcomingCategory_id: '',
    upcomingAudience : '',
    upcomingExpiration: '',
    upcomingStart_date: '',
    upcomingTitle:'',
    upcomingDescription: '',
}


export default function AdminHunts() {
    const api = import.meta.env.VITE_APP_API_URL

    const [huntDetails, setHuntDetails] = useState(defaultHuntDetails);
    const [huntUpcomingDetails, setHuntUpcomingDetails] = useState(defaultHuntDetails);

    const [hunt_status, setHunt_status] = useState("active"); // Status for the kind of hunt to be created - active or upcoming

    // Disabled state for creating hunt button
    const [btnDisabledState, setBtnDisabledState] = useState(false);
    


    // const [start_date, setStart_date] = useState('');
    const {category_id, audience, start_date, hunt_youtube_url, expiration, title, description} = huntDetails;

    const {upcomingCategory_id, upcomingAudience,upcomingStart_date, upcomingExpiration, upcomingTitle, upcomingDescription} = huntUpcomingDetails;

    const [huntCategories, setHuntCategories] = useState([]);
    const [image_guide, setImage_guide] = useState(null);
    const [upcomingImage_guide, setUpcomingImage_guide] = useState(null);

    const [loadingCreateHuntBtn, setLoadingCreateHuntBtn] = useState(false)
    // const [category, setCategory] = useState("");

     // Page or event loading state
     const [loadingCreateHuntForm, setLoadingCreateHuntForm] = useState(true);

     //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setHuntDetails({ ...huntDetails, [name]: value });
    };

    const handleUpcomingChange = (e)=>{
        const { name, value } = e.target;
        setHuntUpcomingDetails({ ...huntUpcomingDetails, [name]: value });
    };

    const clearHuntFormDetails = () => {
        setHuntDetails(defaultHuntDetails);
        fileInputRef.current.value = null;  
    }

    const handleCreateHunt = (e) => {
        e.preventDefault();
        setLoadingCreateHuntBtn(true);
        setBtnDisabledState(true);
        console.log('working');
        // setPublishLoading(true)
        let form = new FormData();
        form.append("category_id", category_id);
        form.append("title", title);
        form.append("description", description);
        form.append("audience", audience);
        form.append('image', image_guide);
        form.append("expiration", expiration);
        hunt_youtube_url === ''? null : form.append("youtube_url", hunt_youtube_url)
        axios.post(api + 'add-or-edit-hunt', form, {headers: {
                Authorization: "Bearer " + sessionStorage['Admin-Token'],
                Accept: 'application/json'
        }},)
        .then(function (response) {
        // handle success
        // console.log(response.data.message)
        setLoadingCreateHuntBtn(false);
        setBtnDisabledState(false);
        const createHuntNotify = () => toast(response.data.message);
        createHuntNotify();
        clearHuntFormDetails();
        // setPublishLoading(false)
        // setMessage(response.data.message)
        // setShowAlert(true)
        })
        .catch(function (error) {
        // handle error
        setLoadingCreateHuntBtn(false);
        setBtnDisabledState(false);
        const createHuntNotify = () => toast(error.response.data.message);
        createHuntNotify();
        
        })
    }

    const handleCreateUpcomingHunt = (e) => {
        e.preventDefault();
        setBtnDisabledState(true);
        setLoadingCreateHuntBtn(true);
        console.log('working');
        // setPublishLoading(true)
        let form = new FormData();
        form.append("category_id", category_id);
        form.append("title", title);
        form.append("description", description);
        form.append("audience", audience);
        form.append('image', image_guide);
        form.append("start_date", start_date);
        form.append("expiration", expiration);
        axios.post(api + 'add-or-edit-hunt', form,  {headers: {
                Authorization: "Bearer " + sessionStorage['Admin-Token'],
                Accept: 'application/json'
        }},)
        .then(function (response) {
        // handle success
        setBtnDisabledState(false);
        setLoadingCreateHuntBtn(false);
        const createHuntNotify = () => toast(response.data.message);
        createHuntNotify();
        clearHuntFormDetails();
        // setPublishLoading(false)
        // setMessage(response.data.message)
        // setShowAlert(true)
        })
        .catch(function (error) {
        // handle error
        setBtnDisabledState(false);
        setLoadingCreateHuntBtn(false);
        const createHuntNotify = () => toast(error.response.data.message);
        createHuntNotify();
        
        })
    }

    const fileInputRef = useRef(null);


    useEffect( () =>{
      // Make a request for a user with a given ID
        if (sessionStorage['Admin-Token']){
            axios.get(api + 'hunt-categories', { 
            headers: {
                    Authorization: "Bearer " + sessionStorage['Admin-Token'],
                    Accept: 'application/json'
            }
  
            })
            .then(function (response) {
            // handle success
            // setLoading(true)
            // setHuntArray(response.data.data)
            setHuntCategories(response.data.data);
            // console.log(response.data.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });
        }
        else{
        navigate('/admin-login')
  
        } 
  
  }, [])

  
  return (
   
    <Container fluid className={`${styles.admin_hunts_container}`}>
        <Row>
            <AdminSidebar active = 'Hunts' show = {show} handleClose = {handleClose}/>
            <Col className='ps-4 py-4 offset-sm-2 offset-lg-3'>
                <DashboardNavbar  handleShow={handleShow}/>
                <Row>
                    {/* Create Active Hunt */}
                        <form className='col-11 col-lg-9' onSubmit={ hunt_status === "active" ? handleCreateHunt : handleCreateUpcomingHunt}>
                        <Row className='mt-5 align-items-center'>
                         <Col xs = 'auto'><p className={`${styles.create_hunt}`}>Create Hunt</p></Col>
                         <Col xs = 'auto' className='ms-auto'><Link to = '/admin/view_hunts' className={`${styles.view_hunts}`}><p>See all Hunts</p></Link></Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <select name="hunt_status" value={hunt_status} id="" 
                                onChange={
                                    (e) => {
                                        setHunt_status(e.target.value)
                                    }
                                } required 
                            >
                                <option value="" disabled>Select Status of the Hunt</option>
                                <option value="active">Active Hunt</option>
                                <option value="upcoming">Upcoming Hunt</option>
                            </select>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col>
                            <select name="category_id" value={category_id} id="" 
                                onChange={handleChange} required 
                            >
                                <option value="" disabled>Hunt Category</option>
                                <option value={1}>Hunt for the day</option>
                                <option value={2}>Hunt for the week</option>
                                <option value={3}>Hunt for the month</option>
                                <option value={4}>Hunt for the year</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                             <input name='title' value={title} type="text" placeholder='Hunt Title' onChange={handleChange} className={`${styles.admin_hunts_containerinput}`} required/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <textarea name="description" value = {description} id=""  rows="10"
                            onChange={handleChange}
                            placeholder='Hunt Description' className={`${styles.admin_hunts_container_textarea}`} required></textarea>
                            </Col>
                        </Row>
                            {
                                hunt_status === "active" ? "" :
                                <Row className='mb-3'>
                                <Col>
                                <input name = 'start_date' type="text" placeholder='Hunt Start Date'  onFocus={(event) => event.target.type = 'date'}  onChange={handleChange}  value={start_date} className={`${styles.admin_hunts_containerinput}`} required/>
                                </Col>
                                 </Row>
                            }
                        <Row className='mb-3'>
                            <Col>
                            <input name = 'expiration' type="text" placeholder='Hunt Expiration'  onFocus={(event) => event.target.type = 'date'}  onChange={handleChange}  value={expiration} className={`${styles.admin_hunts_containerinput}`} required/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                                <input name='audience' placeholder='Hunt Audience' type="text" onChange={handleChange}  value={audience} className={`${styles.admin_hunts_containerinput}`} required/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                                 <input ref={fileInputRef} name='image_guide' type="text" placeholder='Hunt Guide' onFocus={(event) => event.target.type = 'file'} onChange={(e)=>{
                                    setImage_guide(e.target.files[0])
                                 }} className={`${styles.admin_hunts_containerinput}`}  required/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                                <input name='hunt_youtube_url' placeholder='Hunt Video URL - Youtube' type="text" onChange={handleChange}  value={hunt_youtube_url} className={`${styles.admin_hunts_containerinput}`} />
                            </Col>
                        </Row>
                        <Row className='justify-content-center mb-5'>
                            <Col xs ='9' lg = '3'>
                               <button className={`${styles.hunt_btn}`} disabled = {btnDisabledState} style={{opacity:btnDisabledState ? '0.6' : '1'}}>
                                {
                                    loadingCreateHuntBtn ? <Spinner /> :
                                    "Create Hunt"
                                }
                               </button>
                               <ToastContainer />
                            </Col>
                        </Row>
                        
                        </form>      

                                       
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
