import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


import styles from './LandingPage.module.css'
import Navbar from '../../components/navbar/Navbar';


// import bg_video from '../../assets/videos/How_Computer_Vision_Works.mp4';
import crack_logo from '../../assets/images/Crack It, Find It Logo1 1.svg';
import play from '../../assets/images/play.png';
import message from '../../assets/images/message.svg';
import earth from '../../assets/images/earth.svg';
import andriod from '../../assets/images/andriod.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkendin from '../../assets/images/linkendin.svg';
import telegram from '../../assets/images/telegram.svg';
import twitter from '../../assets/images/twitter.svg';
import exit from '../../assets/images/exit.png';




export default function LandingPage() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleNavClick = () => {
    setShowMobileNav(!showMobileNav)
  };

  return (
    <>
       <header className={`${styles.header}`}>
          {/* Background video */}
          {/* <video autoPlay muted loop className={`${styles.video_bg}`} >
              <source src={bg_video} type="video/mp4" />
              Your browser does not support the video tag.
          </video> */}
          <Navbar showMobileNav = {showMobileNav} setShowMobileNav = {setShowMobileNav}/>


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
              <ScrollLink
                      to="about"
                      className={`${styles.mobile_nav_links}`}
                      smooth={true}
                      duration={500}
                      onClick = {handleNavClick}

                    >
                    ABOUT US 
                </ScrollLink>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs = 'auto'>
              <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className={`${styles.mobile_nav_links}`}
                      onClick = {handleNavClick}
                    >
                    CONTACT US 
              </ScrollLink>
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

          <Container style = {{height:'75vh'}}>
           <Row className='align-items-center m-0' style = {{height:'75vh'}}>
              <Col className='p-0'>
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
            <ScrollLink
                to="top"
                className={`${styles.video_watch} col-auto`}
                smooth={true}
                duration={500}
                >
                  See how it works here
              </ScrollLink>
                <Link to='/' className={`col-auto ${styles.play}` }><img src={play} alt="" /></Link>
            </Row>

            <Row className={`justify-content-center mt-5`}>
                <Link to='/signup' className={`${styles.join_hunt} col-auto py-2 px-4`}>
                  JOIN THE HUNT
                </Link>
            </Row>
              </Col>
           </Row>
       </Container>
       </header>

      {/* About Section  */}
        <Container id='about' className='mt-5 mb-md-5'>
          <Row className={`justify-content-center mb-5`}>
            <Col xs = 'auto' className={`${styles.about_it}`}>HOW IT WORKS</Col>
          </Row>
          <Row className={`mb-0 justify-content-center justify-content-md-around`}>
              <div className={`${styles.about_div_col}`}> 
                <div className={`${styles.about_div_row}`}>
                    <div className={`${styles.about_div} ${styles.about_div_1}`}></div>
                    <p className={`${styles.about_text}`}>Innovative Cerebral Hunt show that seamlessly blends intellect and adventure</p>
                </div>
              </div>

              <div className={`${styles.about_div_col}`}>
                <div className={`${styles.about_div_row}`}>
                    <div className={`${styles.about_div} ${styles.about_div_2}`}></div>
                    <p className={`${styles.about_text}`}> Hunters are invited to unravel the mysteries of challenging coded messages on a daily and weekly basis.</p>
                </div>
              </div>

            <div className={`${styles.about_div_col}`}>
                <div className={`${styles.about_div_row}`}>
                    <div className={`${styles.about_div} ${styles.about_div_3}`}></div>
                    <p className={`${styles.about_text}`}>Decode first, find hidden treasure, secure victory in the hunt. Be the pioneer code-cracking conqueror!</p>
                </div>
              </div>
          </Row>
         
        </Container>

        {/* Crack it Video Section */}

        <Container fluid className={`${styles.crack_video_container} mb-5`}>
          <Row id="top" className='m-0'>
             <Col className='p-0'>
               {/* <iframe width="560" height="315" className={`${styles.crack_video}`} src="https://www.youtube.com/embed/hUaUdUyamEc?si=eQ2Tg9wOICSt2oYL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

               <iframe width="560" height="315" className={`${styles.crack_video}`} src="https://www.youtube.com/embed/0AMZukmZRPQ?si=pnAAER6Wv9G0a4f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </Col>
          </Row>

          <Row className={`justify-content-center mt-4`} >
              <Link to='/signup' className={`${styles.sign_up} col-auto px-5 py-2`}>SIGN UP NOW</Link>
          </Row>
        </Container>

        {/* Contact Section */}
       <Container className='mb-5' id='contact'>
          <Row className={`align-items-center justify-content-center justify-content-sm-between`}>
            <div className={`${styles.small_purple_box}`}>

            </div>

            <div className={`${styles.get_in_touch} mb-5`}>
              <p className={`${styles.get_in_touch_title}`}>Get in touch with Us</p>
              <p className={`${styles.get_in_touch_text}`}>We're here to assist you. Reach out for any questions or support.</p>
              <input className='mb-3' type="text" placeholder='Your Name'/>
              <input className='mb-3'type="email" placeholder='Your Email'/>
              <textarea className='mb-4' name="" id="" cols="30" rows="2" placeholder='Type Your Message'></textarea>
              <button className='py-2 mb-2'>Send Message</button>
            </div>

            <div className={`${styles.info}`}>
              <div>
              <p className={`${styles.info_title} mb-4`}>Contact us</p>
              <div className={`${styles.info_row} d-flex mb-3`}>
                <div><img src={andriod} alt="" /></div>
                <p>+2348022374661</p>
              </div>
              <div className={`${styles.info_row} d-flex mb-3`}>
                <div><img src={message} alt="" /></div>
                <p>contact@crackitfindit.com</p>
              </div>
              {/* <div className={`${styles.info_row} d-flex mb-3`}>
                <div><img src={earth} alt="" /></div>
                <p>willie.jennings@example.com</p>
              </div> */}
              </div>
            </div>
            <div className={`${styles.big_purple_box}`}>

            </div>
          </Row>
       </Container>

       {/* Footer Section */}
     <div className={`${styles.footer_wrapper}`}>
      <Container>
              <div className={`${styles.footer_row} py-3 align-items-center justify-content-center justify-content-lg-between`}>
                <div className={`${styles.image_wrapper} mb-3 mb-lg-0`}>
                  <img src={crack_logo} alt="" className='w-100'/>
                </div>
                <div className={`offset-lg-0 col-12 col-lg-4 mb-3 mb-lg-0`}>
                    <div className={`${styles.policy_row} `}>
                        <p>Privacy Policy</p>
                        <p>Terms of Use </p>
                        {/* <p>Cookie Policy</p> */}
                    </div>
                </div>
                <div className={`col-8 col-lg-2 mb-3 mb-lg-0`}>
                  <div className={`${styles.logos_row}`}>
                    <div><img src={twitter} alt="" className='w-100'/></div>
                    <div><img src={telegram} alt="" className='w-100'/></div>
                    <div><img src={instagram} alt="" className='w-100'/></div>
                    <div><img src={linkendin} alt="" className='w-100'/></div>
                    <div><img src={facebook} alt="" className='w-100'/></div>
                  </div>

                </div>
                <div className={`col-9 col-lg-2 mb-3 mb-lg-0 ${styles.rights}`}>
                  {/* <p>© 2021 Tokners. All rights reserved.</p> */}
                  © Crack it 2024. All rights reserved.
                </div>
            </div>
        </Container>
     </div>
        
    </>

  )
}
