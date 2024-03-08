import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

import styles from './SignUp.module.css';
import exit from '../../assets/images/exit.png';

import animate_vid from './animate.mp4';


const defaultUserDetails = {
    'fname': ``,
    'lname': ``,
    'gender': ``,
    'email': ``,
    'country_code':`+234`,
    'phone': ``,
    'password': ``,
    'confirm_password': ``,
    'address': ``,
    'age': ``,
    'occupation': ``,
    'nationality' : `Nigeria`,
    'state' : ``,
    'privacy_terms':false
}


export default function SignUp() {
    const [showMobileNav, setShowMobileNav] = React.useState(false);
    const [signupBtnLoading, setSignUpBtnLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(defaultUserDetails);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageSentence, setErrorMessageSentence] = useState([]);
    const [signupLoading , setSignupLoading ] = useState(false);
    const [border, setBorder] = useState(false)

    const navigate = useNavigate();
    const api = 'https://crackitfindit.rad5.com.ng'

    const {fname, lname, gender, email, phone, password, 
        confirm_password, country_code, address, age, occupation, nationality, state,
        privacy_terms
    } = userDetails;

 
    const handleNavClick = () => {
        setShowMobileNav(!showMobileNav)
      };

    const handleChange = (e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        setUserDetails({ ...userDetails, [name]: value });
   
    };
    
    const handleSubmit = (e)=> {
        // console.log('jk');

        e.preventDefault();
        setSignupLoading(true);
        setErrorMessageSentence([]);
        const requiredFields = ['fname', 'email', 'phone', 'password', 'confirm_password', 'gender', 'age', 'state', 'country_code'];
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
            setSignupLoading(false);
            return;
        }

        if(confirm_password !== password){
            // alert('ogini');
            setErrorMessageSentence(['Password and Confirm Password are not the same']);
            setSignupLoading(false);
            return;
        }

        if(!privacy_terms){
            // alert('baba');
            setErrorMessageSentence(['You must accept privacy terms']);
            setSignupLoading(false);
            return;
        }
           
        axios.post(api + '/api/user-reg', {
            'name': `${fname}`,
            'lname': `${lname}`,
            'gender': `${gender}`,
            'email': `${email}`,
            'phone': `${country_code + phone}`,
            'password': `${password}`,
            'address': `${address}`,
            'age': `${age}`,
            'occupation': `${occupation}`,
            'nationality' : `${nationality}`,
            'state_of_origin' : `${state}`
        })
        .then(function (response) {
            // setLoading(false)
            sessionStorage.setItem("Token", `${response.data.data.token}`);
            console.log(response.data);
            setSignupLoading(false);
            navigate("/user/dashboard");
        })
        .catch(function (error) {
            // alert(error, error.response);
            if (error.response){
            //   setLoading(false)
            console.log(error.response.data);
            console.log(error.response.data.message);
            //   setSuccess(error.response.data.success)
            //   setErrorMessage(error.response.data.message);
            setSignupLoading(false);
            const sentences = error.response.data.message.split('.\n').filter(sentence => sentence.trim() !== '');
            setErrorMessageSentence(sentences);
            console.log(sentences);
            }
            else{
            //   setLoading(false)
            //   setSuccess(false)
            //   setNetwork( network = 'Encountered an error, Please try again')
            console.log('error');
            setSignupLoading(false);
            }
            
        });
        
    }

useEffect(() =>{
    // const isEmpty = Object.values(userDetails).some((value) => value === '');
    // if(isEmpty){
    //     setUserDetails((prevData) => ({
    //         ...prevData,
    //         borderRedFields: true,
    //       }));
    // }
}, [])

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
          <Row className='mb-4'>
            <Col xs = 'auto'>
              <Link to = '/'  className={`${styles.mobile_nav_links}`}>HOME</Link>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col xs = 'auto'>
              <Link
                      to="/"
                      className={`${styles.mobile_nav_links}`}
                    >
                    ABOUT US 
                </Link>
            </Col>
          </Row>
          <Row>
            <Col xs = 'auto'>
              <Link
                      to="/"
                      className={`${styles.mobile_nav_links}`}
                    >
                    CONTACT US 
              </Link>
            </Col>
          </Row>
        </div>
       }

    <div className={`${styles.signup_div} py-3`}>
        
        <Container>
            <Row className={`${styles.signup_form_row}`}>
                <Col  className={`${styles.signup_animate} d-none d-lg-block`}>
                    
                </Col>
                <form className={`${styles.signup_form} col`} onSubmit={handleSubmit}>
                    <Row><Col xs="11" lg ="10"><h1>Create New Account</h1></Col></Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="fname">First Name*</label>
                            <input type="text"  name='fname' value={fname} onChange={handleChange} style={userDetails.borderRedFields && userDetails.fname === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} />
                            {userDetails.borderRedFields && userDetails.fname === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Last Name<span>*</span></label>
                            <input type="text" name='lname' value={lname} onChange={handleChange}
                                 style={userDetails.borderRedFields && userDetails.lname === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} 
                            />
                           {userDetails.borderRedFields && userDetails.lname === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '10'>
                            <label htmlFor="">Email*</label>
                            <input type="email" name='email' value={email} onChange={handleChange}  style={userDetails.borderRedFields && userDetails.email === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} />
                           {userDetails.borderRedFields && userDetails.email === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "5" lg ="3">
                             <label htmlFor="">Country Code<span>*</span></label>
                             {/* <select name="country_code" id="" onChange={handleChange} style={userDetails.borderRedFields && userDetails.country_code === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} >
                                 <option value="">-- select one --</option>
                                 <option value="+254">+254</option>
                                 <option value="+234">+234</option>
                             </select> */}

                             <input type="text" name='nationality' value={country_code} onChange={handleChange}   style={userDetails.borderRedFields && userDetails.country_code === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}   disabled/>
                            {/* {userDetails.borderRedFields && userDetails.nationality === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           } */}
                             {/* <span className={`${styles.inputError} text-danger`}>{errorMessage}</span> */}
                        </Col>
                        <Col xs = "6" lg = "7" className='align-self-end'>
                            <label htmlFor="">Phone Number<span>*</span></label>
                            <input type="number" name='phone' value={phone} onChange={handleChange} style={userDetails.borderRedFields && userDetails.phone === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} />
                            {userDetails.borderRedFields && userDetails.phone === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Occupation<span>*</span></label>
                            <input type="text"  name='occupation' value={occupation} onChange={handleChange} style={userDetails.borderRedFields && userDetails.occupation === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.occupation === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }

                        </Col>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Address <span>*</span></label>
                            <input type="text" name='address' value={address} onChange={handleChange} style={userDetails.borderRedFields && userDetails.address === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.address === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }

                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Country<span>*</span></label>
                            {/* <select name="nationality" id="" onChange={handleChange} style={userDetails.borderRedFields && userDetails.nationality === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} >
                                <option value="">-- select one --</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Ghana">Ghana</option>
                            </select> */}
                            <input type="text" name='nationality' value={nationality} onChange={handleChange}  style={userDetails.borderRedFields && userDetails.nationality === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}  disabled/>
                            {userDetails.borderRedFields && userDetails.nationality === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }

                        </Col>
                        <Col  xs = '11' lg = '5'>
                            <label htmlFor="">State of residence<span>*</span></label>
                            <select name="state" id="" style={userDetails.borderRedFields && userDetails.state === '' ? { border: '1px solid red', outline:"1px solid red" } : {}} onChange={handleChange}>
                                <option value="">-- select one --</option>
                                <option value="Abia State">Abia State</option>
                                <option value="Imo State">Imo State</option>
                            </select>
                            {userDetails.borderRedFields && userDetails.state === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Gender*</label>
                            <select name="gender" id="" required onChange={handleChange} style={userDetails.borderRedFields && userDetails.gender === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}>
                                  <option value="">-- select one --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {userDetails.borderRedFields && userDetails.gender === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>

                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Age*</label>
                            <input type="number" name='age' value={age} onChange={handleChange} style={userDetails.borderRedFields && userDetails.age === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {/* <select name="age" id="" onChange={handleChange}>
                                <option value="18-25">18-25</option>
                                <option value="26-35">26-35</option>
                            </select> */}
                             {userDetails.borderRedFields && userDetails.age === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Password*</label>
                            <input type="password" name='password' value={password} onChange={handleChange} style={userDetails.borderRedFields && userDetails.password === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.password === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }
                        </Col>

                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Confirm Password*</label>
                            <input type="password" name='confirm_password' value={confirm_password} onChange={handleChange} style={userDetails.borderRedFields && userDetails.confirm_password === '' ? { border: '1px solid red', outline:"1px solid red" } : {}}/>
                            {userDetails.borderRedFields && userDetails.confirm_password === '' &&
                             <span className={`${styles.inputError} text-danger`}>{errorMessage}</span>
                           }

                        </Col>
                    </Row>
                    <Row>
                        <Col xs = 'auto'>
                            <input type="checkbox" id="" className={`${styles.privacy_checkbox}`} name='privacy_terms' value={privacy_terms} onChange={handleChange}/>
                        </Col>
                        <Col xs = '10' className={`${styles.privacy_policy}`}>I have read and agreed to Crack It Find It Terms of Service and Privacy Policy </Col>
                    </Row>
                    <Row>
                        <Col xs ="11" lg = "8">
                            <button>
                                {
                                signupLoading ? <Spinner animation="border" variant="warning" /> :
                                "Sign Up"
                                }
                            </button>
                        </Col>
                    </Row>
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
                        <Col  xs = 'auto' className={`${styles.login}`}>Already have an account? <Link to ='/login'>Log In</Link></Col>
                    </Row>
                </form>
            </Row>
        </Container>

    </div>
   </>
  )
}
