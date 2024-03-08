import React from 'react';
import { Container} from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import styles from "./Navbar.module.css";

import {Link} from 'react-router-dom';
// import images from '../../assets/images';
import hunt_logo from '../../assets/images/hunt.jpg';
import crack_logo from '../../assets/images/CRACK IT FIND IT LOGO 1.png';
import crack_logo2 from '../../assets/images/Crack It, Find It Logo1 1.png';
import hamburger from '../../assets/images/hamburger.png'



export default function Navbar({setShowMobileNav, showMobileNav}) {
  const handleNavClick = () => {
      setShowMobileNav(!showMobileNav)
  }
  return (

    <>
      <Container className='py-4'>
        <nav className='row m-0 align-items-center'>
          <div className={`${styles.nav_Logo} col-auto me-auto`}>
            <img className={`${styles.nav_logo_img} w-50`} src={crack_logo2} alt="Hunt Logo"/>
          </div>
         <div className={`col-6 d-none d-lg-block`}>
            <div className={`${styles.nav_links} row m-0 align-items-center justify-content-between`}>
            
              <div className={`${styles.nav_Link} col-auto`}><Link to='/'>HOME</Link></div>
              <div className={`${styles.nav_Link} col-auto`}>
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                  >
                   ABOUT US 
                  </ScrollLink>
              </div>
              <div className={`${styles.nav_Link} col-auto`}>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                  >
                   CONTACT US 
                  </ScrollLink>
                
                </div>
              <div className={`${styles.nav_Link} col-auto ms-auto`}><Link to = '/login'>LOG IN</Link></div>
              <Link to='/signup' className={`${styles.nav_Link} ${styles.nav_button} col-auto`}>SIGNUP</Link>
            </div>
         </div>
          <button className={`${styles.nav_menu} d-lg-none col-auto`}><img src={hamburger} onClick={handleNavClick}/></button>
        </nav>
      </Container>
    </>

  )
}
