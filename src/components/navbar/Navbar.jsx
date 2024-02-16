import React from 'react';
import { Container} from 'react-bootstrap';
import styles from "./Navbar.module.css";

import {Link} from 'react-router-dom';
// import images from '../../assets/images';
import hunt_logo from '../../assets/images/hunt.jpg';
import crack_logo from '../../assets/images/CRACK IT FIND IT LOGO 1.png';
import hamburger from '../../assets/images/hamburger.png'



export default function Navbar() {
  return (

    <>
      <Container className='py-4'>
        <nav className='row m-0 align-items-center'>
          <div className={`${styles.nav_Logo} col`}>
            <img className={`${styles.nav_logo_img}`} src={crack_logo} alt="Hunt Logo" />
          </div>
         <div className={`col d-none d-lg-block`}>
            <div className={`${styles.nav_links} row m-0 align-items-center justify-content-between`}>
              <div className={`${styles.nav_Link} col-auto`}>HOME</div>
              <div className={`${styles.nav_Link} col-auto`}>ABOUT US</div>
              <div className={`${styles.nav_Link} col-auto`}>CONTACT US</div>
              <div className={`${styles.nav_Link} col-auto ms-auto`}>LOG IN</div>
              <Link to='/' className={`${styles.nav_Link} ${styles.nav_button} col-auto`}>SIGNUP</Link>
            </div>
         </div>
          <button className={`${styles.nav_menu} d-lg-none col-auto`}><img src={hamburger}/></button>
        </nav>
      </Container>
    </>

  )
}
