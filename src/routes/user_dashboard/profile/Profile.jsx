import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Spinner, Alert, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import styles from './Profile.module.css';
import edit from './asset/edit.svg';
import edit_main from './asset/edit_main.svg';

import profile_icon from './asset/profile_icon1.svg';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

const defaultProfileDetails = {
  "lastname": "",
  "bio": "",
  "image": "",
  "email": "",
  "gender": "",
  "phone": "",
  "age": "",
  "address": "",
  "nationality": "",
  "date_registered": "",
  "payment": "",
  "occupation":""

}

export default function Profile() {
  // Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Edit Profile Modal
  const [showProfileModal, setShowProfileModal] = useState(false);
  const handleCloseProfileModal = () => setShowProfileModal(false);
  const handleShowProfileModal = () => setShowProfileModal(true);

  const [loadingProfile, setLoadingProfile] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')
  const [profile, setProfile] = useState({});
  const [editProfileLoader, setEditProfileLoader] = useState(false);
  

  const navigate = useNavigate();
  const api = import.meta.env.VITE_APP_API_URL;

  const [userProfile , setUserProfile] = useState(defaultProfileDetails);
  const {lastname, bio, image, email, gender, phone, age, address, 
    nationality, date_registered, payment, state, occupation } = userProfile;

    const handleChange = (e)=>{
      const { name, value } = e.target;
      // console.log(name, value);
      setUserProfile({ ...userProfile, [name]: value });
  };

  const getUserProfie = () => {
    axios.get(api + 'user', { 
      headers: {
          Authorization: "Bearer " + sessionStorage.Token,
          Accept: 'application/json'
      }
   })
  .then(function (response) {
      // handle success
      console.log(response.data.data)
       setUserProfile(response.data.data)
  })
  .catch(function (error) {
      // handle error
      console.log(error);
     //  navigate('/login')
  });

  }

  const clearEditProfileForm = () => {
    setUserProfile(defaultProfileDetails);
  }


  const editProfile = (e) => {
      e.preventDefault();
      console.log("editing profile");
      console.log("address: ", address, "bio: ", bio, "state: ", state, "occupation: ", occupation )
      setEditProfileLoader(true);
      let form = new FormData();
      form.append("address", address);
      form.append("bio", bio);
      form.append("state", state);
      form.append("occupation", occupation);
      let patchProfile = {
        address, bio, state, occupation
      }
      axios.patch(api + 'user', patchProfile , {headers: {
        Authorization: "Bearer " + sessionStorage['Token'],
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
      }},)
      .then(function (response) {
        // handle success
        console.log(response)
        const editProfileNotify = () => toast(response.data.message);
        editProfileNotify();
        clearEditProfileForm();
        setEditProfileLoader(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        console.log('There is an error' + error);
        const editProfileNotify = () => toast(error.message);
        editProfileNotify();
        setEditProfileLoader(false);
      })
  }

  useEffect(()=>{
      if (sessionStorage.Token){
        axios.get(api + 'user', { 
          headers: {
              Authorization: "Bearer " + sessionStorage.Token,
              Accept: 'application/json'
          }
       })
      .then(function (response) {
          // handle success
          console.log("fetch user profile", response)
          // setLoading(false)
          setProfile(response.data.data)
          setErrorMessage('');
          setLoadingProfile(false);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
          // setLoading(false)
          setErrorMessage(error.message)
          setLoadingProfile(false);
          // navigate('/login')
      });

      }
      else{
        navigate('login'); 
      }
  }, [])
  return (
    <Container fluid>
        <Row>
            <UserSidebar show = {show} handleClose = {handleClose} active = "Profile"/>
            <Col className='offset-sm-2 offset-lg-3 px-4 px-sm-3' >
                <DashboardNavbar handleShow={handleShow}/>
                {
                  errorMessage && <Alert className='mt-3' variant='warning'>Network error</Alert>
                }
                {
                  loadingProfile ? 
                    <Row className='justify-content-center mt-5'>
                      <Spinner variant='warning'/>
                    </Row>
                  :
                  <>
                    <Row className='m-0 mt-4 mb-5'>
                  <Col className={`${styles.profile_title} p-0`}>My profile</Col>
                    </Row>
                    <Row className='m-0'>
                      <Col lg = '11' className={`${styles.profile_main_col}`} >
                        <Row className={`${styles.profile_row} ps-1 py-4 align-items-center`}>
                            <div className={`${styles.profile_icon_col} p-0`} ><img src={profile_icon} alt="" className='w-100'/></div>
                            <Col className={`${styles.my_profile_name_details}`} >
                              <p className={`${styles.profile_text}`}>{profile.name}</p>
                              <p className={`${styles.profile_text_tiny_under_name}`}>-</p>
                            </Col>
                            {/* <button className={`${styles.profile_editt}`}>
                              <span>Edit</span>
                              <img src={edit_main} alt="" />
                            </button> */}
                        </Row>
                      {/* Personal Information */}
                        <Row className={`${styles.profile_row} py-4`}>
                            <Col>
                                <Row className='mb-2'>
                                  <Col className={`${styles.profile_text}`} >Personal Information</Col>
                                </Row>
                                <Row >
                                  <Col>
                                    <div className={`${styles.profile_list}`}>
                                        <p>First Name</p>
                                        <p style={{marginTop:'-18px'}}><b>{profile.name}</b></p>
                                        <p>Email Adress</p>
                                        <p style={{marginTop:'-18px'}}><b>{profile.email}</b></p>
                                        <p>Bio</p>
                                        <p style={{marginTop:'-18px'}}><b>{profile.bio}</b></p>
                                        <p>Occupation</p>
                                        <p style={{marginTop:'-18px'}}><b>{profile.occupation}</b></p>
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className={`${styles.profile_list}`}>
                                      <p>Last Name</p>
                                      <p style={{marginTop:'-18px'}}><b>{profile.lastname}</b></p>
                                      <p>Phone</p>
                                      <p style={{marginTop:'-18px'}}><b>{profile.phone}</b></p>
                                      <p>Age</p>
                                      <p style={{marginTop:'-18px'}}><b>{profile.age}</b></p>
                                    </div>
                                  </Col>
                                </Row>
                            </Col>
                            {/* <img src={edit} alt="" className={`${styles.profile_edit}`}/> */}
                            <button className={`${styles.profile_editt}`} onClick={(e) =>{
                              handleShowProfileModal(e);
                              getUserProfie();
                            }
                              
                              }>
                              <span>Edit</span>
                              <img src={edit_main} alt="" />
                            </button>
                        </Row>

                        {/* Address */}
                        <Row className={`${styles.profile_row} py-4`}>
                            <Col>
                                <Row className='mb-2'>
                                  <Col className={`${styles.profile_text}`}>Address</Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <div className={`${styles.profile_list}`}>
                                        <p>Country</p>
                                        <p style={{marginTop:'-18px'}}><b>{profile.nationality}</b></p>
                                        <p>Home Address</p>
                                        <p style={{marginTop:'-18px'}}><b>{profile.address}</b></p>
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className={`${styles.profile_list}`}>
                                      <p>City/State</p>
                                      <p style={{marginTop:'-18px'}}><b>{profile.state}</b></p>
                                    </div>
                                  </Col>
                                </Row>
                            </Col>
                            {/* <button className={`${styles.profile_editt}`}>
                              <span>Edit</span>
                              <img src={edit_main} alt="" />
                            </button> */}
                        </Row>

                      </Col>

                    </Row>
                  </>
                }

            </Col>

            {/* Edit Profile Modal */}
            <Modal show={showProfileModal} onHide={handleCloseProfileModal} className={`${styles.edit_profile_modal}`}>
              <Modal.Body>
                      <form className="col-lg-12" onSubmit={editProfile}>
                          <div className="row">
                              <div className={`col-12 mb-3`}>
                                 <label htmlFor="">Address</label>
                                  <input type="text" className="" name='address' value={address} onChange={handleChange} required/>
                              </div>
                              <div className="col-12 mb-3">
                                  <label htmlFor="">Bio</label>
                                  <input type="text" className="" name='bio' value={bio} placeholder='About you' onChange={handleChange} required/>
                              </div>
                              <div className="col-12 mb-3">
                                  <label htmlFor="">State</label>
                                  <input type="text" className=""  name='state' value={state} onChange={handleChange} required/>
                              </div>
                              <div className="col-12 mb-3">
                                  <label htmlFor="">Occupation</label>
                                  <input type="text" className="" name='occupation' value={occupation} onChange={handleChange} required/>
                              </div>
                              <div className="col-12 mb-3">
                                 <button className={`${styles.edit_profile_btn}`}>
                                  {
                                    editProfileLoader ? 
                                    <Spinner /> :
                                    "Edit Profile"
                                  }
                                 </button>
                                 <ToastContainer />
                              </div>

                          </div>
                      </form>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseProfileModal}>
                            Close
                        </Button>
                      </Modal.Footer>
              </Modal.Body>
            </Modal>
        </Row>
    </Container>
  )
}
