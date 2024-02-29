import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <div className={`${styles.signup_div} py-3`}>
        <Container>
            <Row className={`${styles.signup_form_row}`}>
                <Col className={`${styles.signup_animate} d-none d-lg-block`}>
                </Col>
                <form className={`${styles.signup_form} col`}>
                    <Row><Col xs="11" lg ="10"><h1>Create New Account</h1></Col></Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">First Name*</label>
                            <input type="text" />
                        </Col>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Last Name*</label>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '10'>
                            <label htmlFor="">Email*</label>
                            <input type="email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "5" lg ="3">
                             <label htmlFor="">Phone Number*</label>
                             <select name="" id="">
                                <option value="+234">+234</option>
                             </select>
                        </Col>
                        <Col xs = "6" lg = "7" className='align-self-end'>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Country*</label>
                            <select name="" id="">
                                <option value="">Nigeria</option>
                            </select>
                        </Col>
                        <Col  xs = '11' lg = '5'>
                            <label htmlFor="">State of residence*</label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Gender*</label>
                            <select name="" id="">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </Col>

                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Age*</label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Password*</label>
                            <input type="password" />
                        </Col>

                        <Col xs = '11' lg = '5'>
                            <label htmlFor="">Confirm Password*</label>
                            <input type="password" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = 'auto'>
                            <input type="checkbox" name="" id="" className={`${styles.privacy_checkbox}`}/>
                        </Col>
                        <Col xs = '10' className={`${styles.privacy_policy}`}>I have read and agreed to Crack It Find It Terms of Service and Privacy Policy </Col>
                    </Row>
                    <Row>
                        <Col xs ="11" lg = "8">
                            <button>Sign Up</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs = 'auto' className={`${styles.login}`}>Already have an account? <Link to ='/login'>Log In</Link></Col>
                    </Row>
                </form>
            </Row>
        </Container>

    </div>
  )
}
