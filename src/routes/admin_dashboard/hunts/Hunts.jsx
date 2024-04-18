import React, {useEffect, useState} from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './Hunts.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';


const defaultHuntDetails = {
    category_id: '',
    audience : '',
    expiration: '',
    title:'',
    description: '',
}


export default function AdminHunts() {
    const [huntDetails, setHuntDetails] = useState(defaultHuntDetails);
    const {category_id, audience, expiration, title, description} = huntDetails;
    const [huntCategories, setHuntCategories] = useState([]);
    const [image_guide, setImage_guide] = useState(null)
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

    const handleCreateHunt = (e) => {
        e.preventDefault();
        setLoadingCreateHuntBtn(true);
        console.log('working');
        // setPublishLoading(true)
        let form = new FormData();
        form.append("category_id", category_id);
        form.append("title", title);
        form.append("description", description);
        form.append("audience", audience);
        form.append('image', image_guide);
        form.append("expiration", expiration);
        axios.post('https://crackitfindit.rad5.com.ng/api/add-or-edit-hunt', form,    {headers: {
                Authorization: "Bearer " + sessionStorage['Admin-Token'],
                Accept: 'application/json'
        }},)
        .then(function (response) {
        // handle success
        // console.log(response.data.message)
        setLoadingCreateHuntBtn(false);
        const createHuntNotify = () => toast(response.data.message);
        createHuntNotify()
        // setPublishLoading(false)
        // setMessage(response.data.message)
        // setShowAlert(true)
        })
        .catch(function (error) {
        // handle error
        console.log('There is an error')
        console.log(error);
        setLoadingCreateHuntBtn(false);
        const createHuntNotify = () => toast(error.message);
        createHuntNotify()
        // setPublishLoading(false)
        // setMessage(error.response.data.message)
        // setShowAlert(true)
        })
    }

    useEffect( () =>{
      // Make a request for a user with a given ID
        if (sessionStorage['Admin-Token']){
            axios.get('https://crackitfindit.rad5.com.ng/api/hunt-categories', { 
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
                        <form className='col-11 col-lg-9' onSubmit={handleCreateHunt}>
                        <Row className='mt-5'>
                         <Col><p className={`${styles.create_hunt}`}>Create Hunt</p></Col>
                         <Col xs = 'auto' className='ms-auto'><Link to = '/admin/view_hunts' className={`${styles.view_hunts}`}>See all Hunts</Link></Col>
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
                                 <input name='image_guide' type="text" placeholder='Hunt Guide' onFocus={(event) => event.target.type = 'file'} onChange={(e)=>{
                                    setImage_guide(e.target.files[0])
                                 }} className={`${styles.admin_hunts_containerinput}`} required/>
                            </Col>
                        </Row>
                        <Row className='justify-content-center mb-5'>
                            <Col xs ='9' lg = '3'>
                               <button className={`${styles.hunt_btn}`}>
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
