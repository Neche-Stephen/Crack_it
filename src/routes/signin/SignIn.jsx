import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './SignIn.module.css';
import google from '../../assets/images/google.png'

const defaultUserDetails = {
    'email': ``,
    'password': ``,
}

export default function SignIn() {
    const [userDetails, setUserDetails] = useState(defaultUserDetails);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const api = 'https://crackitfindit.rad5.com.ng';


    const {email, password} = userDetails


    const handleChange = (e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
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
                const labelElement = document.querySelector(`[for=${field}]`);
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
            return;
        }
        axios.post( api + '/api/login', {
            'email': `${email}`,
            'password': `${password}`
          })
          .then(function (response) {
            // setLoading(false)
            console.log(response.data.data.token);
            console.log(response.data);
            alert(response);
            sessionStorage.setItem("Token", `${response.data.data.token}`);
            navigate("/user/dashboard");
            
          })
          .catch(function (error) {
            if (error.response){
            //   setLoading(false)
            console.log(error.response.data);
             alert(error.response.data);
            //   setSuccess(error.response.data.success)
            //   setMessage(error.response.data.message)
            }
            else{
            //   setLoading(false)
            //   setSuccess(false)
            //   setNetwork( network = 'Encountered an error, Please try again')
              console.log('error', error)
            }
          });

    }
  return (
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
                    <Row className='mb-4 mb-lg-5'>
                        <Col xs = '11' lg = '9'>
                            <input type="email" placeholder='Email' name='email' value={email} onChange={handleChange} style={userDetails.borderRedFields && userDetails.email === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.email === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                    </Row>
                    <Row className='mb-2 mb-lg-3'>
                        <Col xs = '11' lg = '9'>
                            <input type="password" placeholder='Password'  name='password' value={password} onChange={handleChange} style={userDetails.borderRedFields && userDetails.password === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.password === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                            <p className={`${styles.forgot_password}`}>Forgot password?</p>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col xs ="11" lg = "9">
                            <button>Log In</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='p-0' xs = "auto">
                            <div className={`${styles.horizontal_line}`} />
                        </Col>
                        <Col xs = "1">
                            <p className={`${styles.horizontal_line_or}`}>or</p>
                        </Col>
                        <Col className='p-0' xs = "auto">
                            <div className={`${styles.horizontal_line}`} />
                        </Col>
                    </Row>
                    <Row className='mb-4'>
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
  )
}
