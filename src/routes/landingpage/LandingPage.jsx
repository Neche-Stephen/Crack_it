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
                  UNLOCK THE THRILL OF ADVENTURE AND INTELLECT
                  
                </div>
            </Row>

            <Row className={`mt-3 ${styles.header_row}`}>
                <div className={`${styles.hero_text}`}>
                  Unravel the mysteries of challenging coded messages on a <br className = "d-none d-sm-block"/> daily and weekly basis.
                </div>
            </Row>

            <Row className={`align-items-center justify-content-center mt-5 `}>
                <Link to = '/' className={`${styles.video_watch} col-auto`}>
                    Watch full video here
                </Link>
                <Link to='/' className={`col-auto ${styles.play}` }><img src={play} alt="" /></Link>
            </Row>

            <Row className={`justify-content-center mt-5`}>
                <Link to='/' className={`${styles.join_hunt} col-auto py-2 px-4`}>
                  JOIN THE HUNT
                </Link>
            </Row>
       </Container>
       </header>

      {/* About Section  */}
        <Container className='mt-5 mb-5'>
          <Row className={`justify-content-center mb-5`}>
            <Col xs = 'auto' className={`${styles.about_it}`}>ABOUT CRACK IT FIND IT</Col>
          </Row>
         <Row className={`mb-3 justify-content-center justify-content-md-between`}>
            <div className={`${styles.about_div_col}`}>
              <div className={`${styles.about_div_row}`}>
                  <div className={`${styles.about_div}`}></div>
                  <p className={`${styles.about_text}`}>Innovative Cerebral Hunt show that seamlessly blends intellect and adventure</p>
              </div>
            </div>

            <div className={`${styles.about_div_col}`}>
              <div className={`${styles.about_div_row}`}>
                  <div className={`${styles.about_div}`}></div>
                  <p className={`${styles.about_text}`}> Hunters are invited to unravel the mysteries of challenging coded messages on a daily and weekly basis.</p>
              </div>
            </div>

           <div className={`${styles.about_div_col}`}>
              <div className={`${styles.about_div_row}`}>
                  <div className={`${styles.about_div}`}></div>
                  <p className={`${styles.about_text}`}>Decode first, find hidden treasure, secure victory in the hunt. Be the pioneer code-cracking conqueror!</p>
              </div>
            </div>
         </Row>
         <Row className={`justify-content-center`}>
            <Link to='' className={`${styles.sign_up} col-auto px-5 py-2`}>SIGN UP</Link>
         </Row>
        </Container>

       
        
    </>

  )
}
