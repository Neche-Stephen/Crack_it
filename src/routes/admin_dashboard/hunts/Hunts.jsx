import React, {useEffect, useState} from 'react';

import { Container, Row, Col } from 'react-bootstrap';

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
    // const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setHuntDetails({ ...huntDetails, [name]: value });
    };

    const handleCreateHunt = (e) => {
        e.preventDefault();
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
        console.log(response.data.message)
        // setPublishLoading(false)
        // setMessage(response.data.message)
        // setShowAlert(true)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
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
            console.log(response.data.data);
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
            <AdminSidebar active = 'Hunts'/>
            <Col className='ps-4 py-4 offset-3'>
                <DashboardNavbar />
                <Row>
                    <form className='col-11 col-lg-9' onSubmit={handleCreateHunt}>
                        <Row className='mt-5'>
                         <Col><p className={`${styles.create_hunt}`}>Create Hunt</p></Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <select name="category_id" value={category_id} id="" 
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Category</option>
                                {
                                    huntCategories.map((huntCategory, index) =>{
                                        return <option key = {index} value={huntCategory.id}>{huntCategory.title}</option>
                                    })
                                }
                            </select>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                             <input name='title' value={title} type="text" placeholder='Hunt Title' onChange={handleChange} className={`${styles.admin_hunts_containerinput}`}/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                            <textarea name="description" value = {description} id=""  rows="10"
                            onChange={handleChange}
                            placeholder='Hunt Description' className={`${styles.admin_hunts_container_textarea}`} required></textarea>
                            </Col>
                        </Row>
                        {/* <Row className='mb-3'>
                            <Col>
                            <select name="audience" id="" value={audience}>
                                    <option value="" disabled>Requirement</option>
                                    <option value="">18 and abovet</option>
                                    <option value="">Requirement</option>
                            </select>
                            </Col>
                        </Row> */}
                        {/* <Row className='mb-3'>
                            <Col>
                            <select name="" id="">
                                    <option value="">Reward</option>
                            </select>
                            </Col>
                        </Row> */}
                        <Row className='mb-3'>
                            <Col>
                            <input name = 'expiration' type="date" onChange={handleChange}  value={expiration} className={`${styles.admin_hunts_containerinput}`}/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                                <input name='audience' placeholder='Audience' type="text" onChange={handleChange}  value={audience} className={`${styles.admin_hunts_containerinput}`}/>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col>
                                 <input name='image_guide' type="file" onChange={(e)=>{
                                    setImage_guide(e.target.files[0])
                                 }} className={`${styles.admin_hunts_containerinput}`} />
                            </Col>
                        </Row>
                        <Row className='justify-content-center mb-5'>
                            <Col xs ='9' lg = '3'>
                               <button className={`${styles.hunt_btn}`}>Create Hunt</button>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col><p className={`${styles.create_hunt}`}>Reward Hunt</p></Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col xs = '12' className='mb-3'>
                                <input type="text" placeholder='Iwuanyanwu Claire' className={`${styles.admin_hunts_containerinput}`}/>
                            </Col>
                            <Col xs = '12' >
                            <select name="" id="">
                                    <option value="">Category</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs ='9' lg = '3'>
                                 <Link to = '/admin/hunts'><button className={`${styles.hunt_btn}`}>Reward</button></Link>
                            </Col>
                        </Row> */}
                    </form>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
