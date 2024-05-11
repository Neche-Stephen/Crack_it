import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

import Navbar from '../../components/navbar/Navbar';


import styles from './SignIn.module.css';
import google from '../../assets/images/google.png';
import exit from '../../assets/images/exit.png';


const defaultUserDetails = {
    'email': ``,
    'password': ``,
}

export default function SignIn() {
    const [showMobileNav, setShowMobileNav] = React.useState(false);
    const [userDetails, setUserDetails] = useState(defaultUserDetails);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageSentence, setErrorMessageSentence] = useState([]);
    const [signupLoading , setSignupLoading ] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [btnDisabledState, setBtnDisabledState] = useState(false);


    const navigate = useNavigate();
    const api = 'https://crackitfindit.com';


    const {email, password} = userDetails

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleNavClick = () => {
        setShowMobileNav(!showMobileNav)
      };

    const handleChange = (e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSignupLoading(true);
        setBtnDisabledState(true);
        setErrorMessageSentence([]);
        const requiredFields = ['email','password'];
        const isEmpty = requiredFields.some((field) => userDetails[field] === '');
        if(isEmpty){
            setUserDetails((prevData) => ({
                ...prevData,
                borderRedFields: true,
            }));
            // Find the first empty required field
            const emptyField = requiredFields.find((field) => userDetails[field] === '');
            // Display error message in the corresponding span element
            setErrorMessage(`This field is required.`);
            const scrollToLabel = (field) => {
                const labelElement = document.querySelector(`[name=${field}]`);
                if (labelElement) {
                labelElement.scrollIntoView({ behavior: 'smooth' });
                }
            };
            // Scroll to the label of the empty field
            scrollToLabel(emptyField);
            // // Scroll to the empty field
            // const element = document.querySelector(`[name=${emptyField}]`);
            // if (element) {
            // element.scrollIntoView({ behavior: 'smooth' });
            // }
            setSignupLoading(false);
            setBtnDisabledState(false);
            return;
        }
        axios.post( api + '/api/login', {
            'email': `${email}`,
            'password': `${password}`
          })
          .then(function (response) {
            // setLoading(false)
            // console.log(response.data.data.token);
            // console.log(response.data);
            sessionStorage.setItem("Token", `${response.data.data.token}`);
            setSignupLoading(false);
            setBtnDisabledState(false);
            navigate("/user/dashboard");
            
          })
          .catch(function (error) {
            if (error.response){
            //   setLoading(false)
            console.log(error.response.data);
            //   setSuccess(error.response.data.success)
            //   setMessage(error.response.data.message)
            const sentences = error.response.data.message.split('.\n').filter(sentence => sentence.trim() !== '');
            setErrorMessageSentence(sentences);
            console.log(sentences);
            setSignupLoading(false);
            setBtnDisabledState(false);
            }
            else{
            //   setLoading(false)
            //   setSuccess(false)
            //   setNetwork( network = 'Encountered an error, Please try again')
              console.log('error', error);
              if (error.message === 'Network Error')
              {
                setErrorMessageSentence(['There is a problem with your internet connection'])
                setSignupLoading(false);
                setBtnDisabledState(false);
              }
              else{
                setErrorMessageSentence([error.message])
                setSignupLoading(false);
                setBtnDisabledState(false);
              }
             
            }
          });

    }
  return (
   <>
    <nav style={{backgroundColor:"#660066"}}> <Navbar showMobileNav = {showMobileNav} setShowMobileNav = {setShowMobileNav}/></nav>
    
          {/* Mobile Navbar */}
          {
        showMobileNav &&    
        <div className={`${styles.mobile_nav}`}>
          <Row className='justify-content-end mb-1'>
            <Col xs = 'auto'>
              <img src={exit} alt="" className='w-100' onClick={handleNavClick} style={{cursor:'pointer'}}/>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs = 'auto'>
              <Link to = '/'  className={`${styles.mobile_nav_links}`}>HOME</Link>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs = 'auto'>
              <Link
                      to="/"
                      className={`${styles.mobile_nav_links}`}
                      
                    >
                    ABOUT US 
                </Link>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs = 'auto'>
              <Link
                      to="/"
                      
                      className={`${styles.mobile_nav_links}`}
                    >
                    CONTACT US 
              </Link>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs = 'auto'>
             <Link to = '/login' className={`${styles.mobile_nav_links}`}>LOG IN</Link>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs = 'auto'>
             <Link to='/signup' className={`${styles.mobile_nav_links}`}>SIGNUP</Link>
            </Col>
          </Row>
        </div>
       }
    <div className={`${styles.signin_div} py-3`}>
        <Container>
            <Row className={`${styles.signin_form_row}`}>
                <Col className={`${styles.signin_animate} d-none d-lg-block col-12 col-lg-6`}>
                
                </Col>
                <form className={`${styles.signin_form} col-12 col-lg-6`} onSubmit={handleSubmit}>
                    <Row className='mb-5'>
                        <Col xs = "11" lg = "9">
                            <h1>Welcome!</h1>
                            <span>Join the adventure with Crack It Find It.</span>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs = '11' lg = '9'>
                            <input type="text" placeholder='Email' name='email' value={email} onChange={handleChange} style={userDetails.borderRedFields && userDetails.email === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.email === '' &&
                            <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                        }
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs = '11' lg = '9' style={{position:'relative'}}>
                            <input type={showPassword? 'text' : 'password'} placeholder='Password'  name='password' value={password} onChange={handleChange} style={userDetails.borderRedFields && userDetails.password === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            <span className={`${styles.password_view}`} onClick={togglePasswordVisibility}>
                                <Icon icon={showPassword ? eyeOff : eye} size={25}/>
                            </span>
                            {userDetails.borderRedFields && userDetails.password === '' &&
                            <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                        }
                            {/* <p className={`${styles.forgot_password}`}>Forgot password?</p> */}
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs ="11" lg = "9">
                            
                            <button disabled = {btnDisabledState} style={{opacity:btnDisabledState ? '0.6' : '1'}}>
                                {
                                signupLoading ? <Spinner animation="border" variant="warning"/> :
                            "Log In"
                                }
                            </button>

                        </Col>
                    </Row>
                    {/* <Row>
                        <Col className='p-0' xs = "auto">
                            <div className={`${styles.horizontal_line}`} />
                        </Col>
                        <Col xs = "1">
                            <p className={`${styles.horizontal_line_or}`}>or</p>
                        </Col>
                        <Col className='p-0' xs = "auto">
                            <div className={`${styles.horizontal_line}`} />
                        </Col>
                    </Row> */}
                    {/* <Row className='mb-4'>
                        <Col xs = "11" lg = "9">
                            <button className={`${styles.continue_google} row m-0 align-items-center justify-content-center`}>
                                <div className={`col-auto p-0`}>
                                    <img src={google} alt="" />
                                </div>

                                <div className={`col-auto p-0`}>
                                    Continue with Google
                                </div>
                            </button>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col xs ="11" lg = "8">
                        {
                            errorMessageSentence.length !== 0 && <Alert variant='danger'>
                            <ul className={`${styles.signup_error}`}>
                                {errorMessageSentence.map((sentence, index) => (
                                    <li key={index}>
                                        {sentence}
                                    </li>
                                ))}
                            </ul>
                            </Alert>
                        }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = 'auto'>
                        <p className={`${styles.signup}`}>Don't have an account? <Link to='/signup'>Create now</Link></p>
                        </Col>
                    </Row>
                </form>
            </Row>
        </Container>
    </div>
   </>
  )
}
