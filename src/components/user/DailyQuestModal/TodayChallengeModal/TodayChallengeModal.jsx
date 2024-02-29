import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

import styles from './TodayChallengeModal.module.css'

import left_arrow from './asset/left_arrow.png'

export default function TodayChallengeModal(props) {
  console.log(props)
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    
    <Modal.Body className={`${styles.today_challenge_body}`}>
      <div className={`${styles.today_challenge_row} row mb-3 align-items-center` }>
        <div className='col-2 col-lg-1' >
          <img src={left_arrow} alt="" className='w-100' onClick={props.onHide}/>
        </div>
        <div className='col-auto mx-auto'>
          <p className={`${styles.today_challenge_text}`}>Today's Challenge</p>
        </div>

      </div>

      <Row className='justify-content-center'>
        <Col xs = 'auto'>
            <p className={`${styles.today_challenge_task}`}>Task</p>
        </Col>
      </Row>


      <Row className='justify-content-center'>
        <Col xs ='auto'> <span>Description</span></Col>
      </Row>

      <Row className={`${styles.details} justify-content-center`}>
        <Col xs = "10" lg = "6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto, eaque eius ullam aliquid, obcaecati qui quasi ab deleniti molestias dignissimos recusandae harum quo, sint placeat! Eligendi alias laborum fugit.</p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs = 'auto'>
          <span>Requirments</span>
        </Col>
      </Row>

      <Row className={`${styles.details} justify-content-center`}>
        <Col xs = "10" lg = "6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto, eaque eius ullam aliquid, obcaecati qui quasi ab deleniti molestias dignissimos recusandae harum quo, sint placeat! Eligendi alias laborum fugit.</p>
        </Col>
      </Row>

       <Row className='justify-content-center'>
        <Col xs = 'auto'>
          <span>Reward</span>
        </Col>
      </Row>

      <Row className={`${styles.details} justify-content-center`}>
        <Col xs = "10" lg = "6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto, eaque eius ullam aliquid, obcaecati qui quasi ab deleniti molestias dignissimos recusandae harum quo, sint placeat! Eligendi alias laborum fugit.</p>
        </Col>
      </Row>

       <Row className='justify-content-center'>
        <Col xs = '10' lg = '3'>
          <button>Finish</button>
        </Col>
      </Row>
      
    </Modal.Body>
  
  </Modal>
  )
}

// MonthlyQuestModal
// WeeklyQuestModal