import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Alert, Spinner, Table, Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import axios from 'axios';

import styles from './ViewHunts.module.css';

import AdminSidebar from '../../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../../components/general/dashboard_navbar/DashboardNavbar';

import left_arrow from './asset/left_arrow.svg'
import right_arrow from './asset/right_arrow.svg';
import search_icon from './asset/search_icon.svg';

const defaultHuntDetails = {
    category_id: '',
    audience : '',
    expiration: '',
    title:'',
    description: '',
    hunt_id : ''
}


export default function Transactions() {
    
    const [huntDetails, setHuntDetails] = useState(defaultHuntDetails);
    const {audience, expiration, title, description, hunt_id} = huntDetails;
    const [huntCategories, setHuntCategories] = useState([]);
    const [image_guide, setImage_guide] = useState(null);
    const [image_display, setImage_display] = useState(null) // Image to be displayed when trying to edit
    const [huntCategory, setHuntCategory] = useState('');
    const [huntCategoryId, setHuntCategoryId] = useState('');
    const [editedImage, setEditedImage] = useState(false);


    // Page or event loading state
    const [loading, setLoading] = useState(true);
    const [editLoading, setEditLoading] = useState(false);

   
    const [huntsList, setHuntsList] = useState([]);

    const [fromPageNumber, setFromPageNumber] = useState('');
    const [toPageNumber, setToPageNumber] = useState('');

    const [prevLink, setPrevLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const [disabled, setDisabled] = useState(true);

    // const [api, setApi] = useState(defaultApi);
    const api = import.meta.env.VITE_APP_API_URL;
    const [fetchHuntsApi, setFetchHuntsApi] = useState("https://crackitfindit.com/api/get-hunts ");


    //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Edit Hunt Modal
    const [showEditHuntModal, setShowEditHuntModal] = useState(false);
    const handleCloseEditHuntModal = () => setShowEditHuntModal(false);
    const handleShowEditHuntModal = () => setShowEditHuntModal(true);

     // Disabled state for editing hunt button
     const [btnDisabledState, setBtnDisabledState] = useState(false);

     // Edit Hunt Form Loader/Spinner
     const [editHuntFormLoader, setEditHuntFormLoader] = useState(false);

    const [searchQuery, setSearchQuery] = useState(''); // Search query for searching different hunts

     // Method to set search query
    const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    };

    const filteredHuntsList = huntsList.filter(hunt =>
        hunt.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const nextPage = () =>{
        console.log('called')
        setFetchHuntsApi(nextLink)
    }

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setHuntDetails({ ...huntDetails, [name]: value });
    };

    const getHunt = (e, hunt) => {
        e.preventDefault();
        // console.log('Network requestS')
        // setLoadingEditHunt(true)
        setEditHuntFormLoader(true);
        axios.get(api + 'get-hunt/' + hunt, { 
            headers: {
                    Authorization: "Bearer " + sessionStorage['Admin-Token'],
                    Accept: 'application/json'
            }
            })
            .then(function (response) {
                // handle success
                setEditHuntFormLoader(false);
                setHuntDetails(response.data.data);
                // console.log(response.data.data)
                setImage_guide(response.data.data.image_url)
                setImage_display(response.data.data.image_url)
                setHuntCategory(response.data.data.hunt_category.title)
                setHuntCategoryId(response.data.data.hunt_category.id)
                getHuntCategories();
                // setShowEditHunt(true)
                // window.location = '#about'
            })
            .catch(function (error) {
            setEditHuntFormLoader(false);

                // handle error
                // console.log(error);
                // navigate('/login')
            });


    }

    const getHuntCategories = () => {
        axios.get(api + 'hunt-categories', { 
            headers: {
                    Authorization: "Bearer " + sessionStorage['Admin-Token'],
                    Accept: 'application/json'
            }

            })
            .then(function (response) {
            // handle success
            // console.log('hunt categories', response.data.data)
            setHuntCategories(response.data.data)
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            });
    }

    const editHunt = (e) => {
        e.preventDefault()
        setEditLoading(true);
        setBtnDisabledState(true);
        let form = new FormData();
        form.append("category_id", huntCategoryId);
        form.append("title", title);
        form.append("description", description);
        form.append("audience", audience);
        if (editedImage === true){form.append('image', image_guide); console.log('jj')}
        form.append("expiration", expiration);
        form.append("hunt_id", hunt_id);
        axios.post(api + 'add-or-edit-hunt', form,    {headers: {
            Authorization: "Bearer " + sessionStorage['Admin-Token'],
            Accept: 'application/json'
    }},)
    .then(function (response) {
        // handle success
        setEditLoading(false);
        setBtnDisabledState(false);
         // Toast Notifications
        const editHuntNotify = () => toast(response.data.message);
        editHuntNotify();
        fetchHunts();
        })
    .catch(function (error) {
        // handle error
        setEditLoading(false);
        setBtnDisabledState(false);
    })
    }

    const fetchHunts = () =>{
        axios.get(fetchHuntsApi, { 
            headers: {
                Authorization: "Bearer " + sessionStorage['Admin-Token'],
                Accept: 'application/json'
            }
         })
        .then(function (response) {
            // handle success
            console.log("all hunts links",response.data.links)
            setHuntsList(response.data.data)
            setPrevLink(response.data.links.prev);
            setNextLink(response.data.links.next);
            setFromPageNumber(response.data.meta.from);
            setToPageNumber(response.data.meta.to);
            setLoading(false);
        })
        .catch(function (error) {
            // handle error
            setLoading(false);
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    useEffect(() =>{
        fetchHunts();
    }, [fetchHuntsApi])

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
                <AdminSidebar active = 'Hunts' show = {show} handleClose = {handleClose}/>
                <Col className='offset-sm-2 offset-lg-3 ps-4'>
                    <DashboardNavbar  handleShow={handleShow}/>

                    <Row className='align-items-center mb-5 mt-4'>
                        <Col xs = 'auto' className='p-0'>
                            <p className={`${styles.profile_title} m-0`}>All Hunts</p>
                        </Col>
                        <Col xs = 'auto' className='ms-auto position-relative'>
                            <input type="text" placeholder='Search hunt title' onChange={handleSearch}/>
                            <img src={search_icon} className={`${styles.search_icon}`} alt="" />
                        </Col>

                        <Col xs = 'auto'>
                            <span className={`${styles.count}`}>{fromPageNumber} - {toPageNumber} of 1000</span>
                            <button type='button' className={`${styles.pagination_arrow} me-2`}><img src={left_arrow} alt="" /></button>
                            <button type='button' onClick={nextPage} className={`${styles.pagination_arrow}`}><img src={right_arrow} alt="" /></button>
                        </Col>
                    </Row>

                    <Row className=''>
                        <Col xs = '11'>

                            

                        <Table hover responsive>
                                <thead>
                                <tr>
                                <th>hunt_id</th>
                                <th>hunt_category</th>
                                <th>title</th>
                                <th>description</th>
                                <th>audience</th>
                                <th>Hunt Image</th>
                                <th>date_created</th>
                                <th>expiration</th>
                                <th>Edit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                filteredHuntsList.map( (huntDetail) =>{
                                        return (
                                                <tr key = {Math.random()}>
                                                <td>{huntDetail.hunt_id}</td>
                                                <td>{huntDetail.hunt_category.title}</td>
                                                <td>{huntDetail.title}</td>
                                                <td>{huntDetail.description}</td>
                                                <td>{huntDetail.audience}</td>
                                                <td><img src={huntDetail.image_url} alt="" width = '100%' /></td>
                                                <td>{huntDetail.date_created.slice(0, 10)}</td>
                                                <td>{huntDetail.expiration.slice(0, 10)}</td>
                                                <td> 
                                                    {/* <button onClick={ (e) => editHunt(e, huntDetail.hunt_id )} className='btn btn-primary huntsTable-edit-hunt-btn' id={Math.random()} >Edit Hunt</button> */}
                                                <CiEdit onClick={ (e) =>{
                                                    getHunt(e, huntDetail.hunt_id);
                                                    handleShowEditHuntModal()
                                                }}/>
                                                </td>
                                                </tr>  
                                        )
                                })
                                }
                                        
                                </tbody>
                            </Table>

                            {/* Edit Modal Modal */}
                            <Modal  size="lg" show={showEditHuntModal} onHide={handleCloseEditHuntModal} className={`${styles.editHuntForm}`}>
                                
                            {

                                editHuntFormLoader ?

                                <Container className='mt-5 mb-5'>
                                <Row className='justify-content-center'>
                                  <Col xs = 'auto'>
                                    <Spinner />
                                  </Col>
                                </Row>
                              </Container>
                                    :
                                    <Modal.Body >
                                        <form className='col-lg-12' onSubmit={editHunt}>
                                            <Row className='mt-5'>
                                            <Col><p className={`${styles.edit_hunt}`}>Edit Hunt</p></Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                <label htmlFor = 'category_id'>Edit Hunt Category</label>

                                                <select value={huntCategoryId} onChange={handleChange}>
                                                    <option value="" disabled>Hunt Category</option>
                                                    {
                                                        huntCategories.map((huntCategory) =>{
                                                            return <option key = {huntCategory.id} value={huntCategory.id} >{huntCategory.title}</option>
                                                        })
                                                    }
                                                </select>
                                                </Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                <label htmlFor = 'title'>Edit Hunt Title</label>
                                                <input name='title' id = 'title' value={title} type="text" placeholder='Hunt Title' onChange={handleChange} className={`${styles.editHuntForminput}`} required/>
                                                </Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                <label htmlFor = 'description'>Edit Hunt Description</label>
                                                <textarea name="description" id = 'description' value = {description} rows="10"
                                                onChange={handleChange}
                                                placeholder='Hunt Description' className={`${styles.editHuntForm_textarea}`} required></textarea>
                                                </Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                <label htmlFor = 'expiration'>Edit Hunt Expiration Date</label>
                                                <input name = 'expiration' id = 'expiration' type="text" placeholder='Hunt Expiration'  onFocus={(event) => event.target.type = 'date'}  onChange={handleChange}  value={expiration} className={`${styles.editHuntForminput}`} required/>
                                                </Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                    <label htmlFor = 'audience'>Edit Hunt Audience</label>
                                                    <input name='audience' id = 'audience' placeholder='Hunt Audience' type="text" onChange={handleChange}  value={audience} className={`${styles.editHuntForminput}`} required/>
                                                </Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col className = ''>
                                                <label htmlFor = 'image_guide'>Edit Hunt Guide Image</label>
                                                <div className = 'border rounded p-4'>
                                                    <img src={image_display} alt="" width="" className = 'd-block mb-2 w-100'/>
                                                    <input name='image_guide' id = 'image_guide' type="file" placeholder='Hunt Guide' onChange={(e)=>{
                                                        setEditedImage(true);
                                                        setImage_guide(e.target.files[0]);
                                                        setImage_display(URL.createObjectURL(e.target.files[0]));
                                                    }} className={`${styles.editHuntForminput} ${styles.image_guide}`}/>
                                                </div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-center mb-5'>
                                                <Col xs ='6' lg = '3'>
                                                <button className={`${styles.hunt_btn}`} disabled = {btnDisabledState} style={{opacity:btnDisabledState ? '0.6' : '1'}}>
                                                    {editLoading ? <Spinner /> : "Edit Hunt"}
                                                </button>
                                                <ToastContainer />

                                                </Col>
                                            </Row>
                                        </form>    
                                     </Modal.Body>



                            }



                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseEditHuntModal}>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        
                           
                        </Col>
                    </Row>        
                
                </Col>
            </Row>
           
         </Container>
    }
    
    </>
    )
}
