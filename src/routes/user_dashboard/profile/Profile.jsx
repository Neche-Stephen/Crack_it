import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './Profile.module.css';
import edit from './asset/edit.svg';
import profile_icon from './asset/profile_icon1.svg';
import UserSidebar from '../../../components/user/userSidebar/UserSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

export default function Profile() {
  // Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profile, setProfile] = useState([])
  const navigate = useNavigate();
  const api = 'https://crackitfindit.rad5.com.ng';

  useEffect(()=>{
      if (sessionStorage.Token){
        axios.get(api + '/api/user', { 
          headers: {
              Authorization: "Bearer " + sessionStorage.Token,
              Accept: 'application/json'
          }
       })
      .then(function (response) {
          // handle success
          console.log(response)
          // setLoading(false)
          setProfile(response.data.data)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
          setLoading(false)
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
            <UserSidebar show = {show} handleClose = {handleClose} active = "profile"/>
            <Col className='offset-sm-2 offset-lg-3 px-4'>
                <DashboardNavbar handleShow={handleShow}/>
                <Row>
                  <Col className={`${styles.profile_title}`}>My profile</Col>
                </Row>
                <Row>
                  <Col xs = '9' className={`${styles.profile_main_col}`}>
                    <Row className={`${styles.profile_row} ps-1 py-4 align-items-center`}>
                        <div className={`${styles.profile_icon_col}`}><img src={profile_icon} alt="" className='w-100'/></div>
                        <Col>
                          <p className={`${styles.profile_text}`}>Kaka Claire</p>
                          <p className={`${styles.profile_text_tiny_under_name}`}>Enthusiast</p>
                        </Col>
                        <img src={edit} alt="" className={`${styles.profile_edit}`}/>
                    </Row>
                  {/* Personal Information */}
                    <Row className={`${styles.profile_row} py-4`}>
                        <Col>
                            <Row className='mb-2'>
                              <Col className={`${styles.profile_text}`}>Personal Information</Col>
                            </Row>
                            <Row>
                              <Col>
                                 <div className={`${styles.profile_list}`}>
                                    <p>First Name</p>
                                    <p style={{marginTop:'-18px'}}><b>Claire</b></p>
                                    <p>Email Adress</p>
                                    <p style={{marginTop:'-18px'}}><b>Kakaclaire@gmail.com</b></p>
                                    <p>Bio</p>
                                    <p style={{marginTop:'-18px'}}><b>Enthusiast</b></p>
                                 </div>
                              </Col>
                              <Col>
                                <div className={`${styles.profile_list}`}>
                                  <p>Last Name</p>
                                  <p style={{marginTop:'-18px'}}><b>Kaka</b></p>
                                  <p>Phone</p>
                                  <p style={{marginTop:'-18px'}}><b>+ 234 8097890976 </b></p>
                                  <p>Age</p>
                                  <p style={{marginTop:'-18px'}}><b>24</b></p>
                                </div>
                              </Col>
                            </Row>
                        </Col>
                        <img src={edit} alt="" className={`${styles.profile_edit}`}/>
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
                                    <p style={{marginTop:'-18px'}}><b>Nigeria</b></p>
                                 </div>
                              </Col>
                              <Col>
                                <div className={`${styles.profile_list}`}>
                                  <p>City/State</p>
                                  <p style={{marginTop:'-18px'}}><b>Aba, Abia State </b></p>
                                </div>
                              </Col>
                            </Row>
                        </Col>
                        <img src={edit} alt="" className={`${styles.profile_edit}`}/>
                    </Row>

                  </Col>

                </Row>

            </Col>
        </Row>
    </Container>
  )
}
