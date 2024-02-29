import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './SignIn.module.css';
import google from '../../assets/images/google.png'

export default function SignIn() {
  return (
    <div className={`${styles.signin_div} py-3`}>
        <Container>
            <Row className={`${styles.signin_form_row}`}>
                <Col className={`${styles.signin_animate} d-none d-lg-block col-12 col-lg-6`}>
                
                </Col>
                <form className={`${styles.signin_form} col-12 col-lg-6`}>
                    <Row className='mb-5'>
                        <Col xs = "11" lg = "9">
                            <h1>Welcome!</h1>
                            <span>Join the adventure with Crack It Find It.</span>
                        </Col>
                    </Row>
                    <Row className='mb-4 mb-lg-5'>
                        <Col xs = '11' lg = '9'>
                            <input type="text" placeholder='Email/Phone Number'/>
                        </Col>
                    </Row>
                    <Row className='mb-2 mb-lg-3'>
                        <Col xs = '11' lg = '9'>
                            <input type="password" placeholder='Password'/>
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
