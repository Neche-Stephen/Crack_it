import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import styles from './LandingPage.module.css'
import Navbar from '../../components/navbar/Navbar';


// import bg_video from '../../assets/videos/How_Computer_Vision_Works.mp4';
import bg_video from '../../assets/videos/dangote.mp4';
import bg_header from '../../assets/images/bg_header.png';
import play from '../../assets/images/play.png'





export default function LandingPage() {
  return (
    <>
       <header className={`${styles.header}`}>
          {/* Background video */}
          {/* <video autoPlay muted loop className={`${styles.video_bg}`} >
              <source src={bg_video} type="video/mp4" />
              Your browser does not support the video tag.
          </video> */}
          <Navbar />

          {/* Mobile Navbar */}

          <Container>
            <Row className={`justify-content-center mt-5 ${styles.header_row}`} >
                <div className={`${styles.hero_title}`}>
                  Unlock the Thrill of Adventure and Intellect 
                </div>
            </Row>

            <Row className={`mt-3 ${styles.header_row}`}>
                <div className={`${styles.hero_text}`}>
                  Unravel the mysteries of challenging coded messages on a daily and weekly basis.
                </div>
            </Row>

            <Row className={`align-items-center justify-content-center mt-5 `}>
                <Link to = '/' className={`${styles.video_watch} col-auto`}>
                    Watch full video here
                </Link>
                <Link to='/' className={`col-auto`}><img src={play} alt="" /></Link>
            </Row>

            <Row className={`justify-content-center mt-5`}>
                <Link to='/' className={`${styles.join_hunt} col-auto py-2 px-4`}>
                  JOIN THE HUNT
                </Link>
            </Row>
       </Container>
       </header>


       
        
    </>

  )
}
