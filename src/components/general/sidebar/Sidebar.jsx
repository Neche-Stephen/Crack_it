import React, {Fragment, useState, useRef, useEffect} from 'react';
import { Container, Row, Col, Offcanvas} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

// import crack_it_logo from '../../../assets/images/hunt.svg'
import crack_it_logo from '../../../assets/images/Crack It, Find It Logo 8.png'

import styles from "./Sidebar.module.css";
import logout from '../../../assets/images/logout_side.png';

export default function ({sidebarItems, show, handleClose, active}) {
    const [activeItem, setActiveItem] = React.useState(active);
    // const [mobileClicked, setMobileClicked] = React.useState(active);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
     const sidebarRef = useRef(null);
     const navigate = useNavigate();

    // const mobileRef = React.useRef();
    // const tabDeskRef = React.useRef();

    // const navigate = useNavigate();
   
    const handleSideBarClick = (item, link)=>{
        setActiveItem(item);
        navigate(link);
    }

    const handleLogout = ()=>{
      sessionStorage.removeItem("Token");
      navigate('/login')
    }

    // const 

    // const handleMobileClick = () =>{
    //     tabDeskRef.current.style.display = tabDeskRef.current.style.display === 'block' ? 'none' : 'block';
    //     mobileRef.current.style.display = tabDeskRef.current.style.display === 'block' ? 'none' : 'block';
    // }

    // const toggleSidebar = () => {
    //     setSidebarOpen(!isSidebarOpen);
    //   };

    // const handleOutsideClick = (event) => {
    //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    //       setSidebarOpen(false);
    //     }
    //   };

    //   useEffect(() => {
    //     if (isSidebarOpen) {
    //       document.addEventListener('click', handleOutsideClick);
    //     }
    
    //     return () => {
    //       document.removeEventListener('click', handleOutsideClick);
    //     };
    //   }, [isSidebarOpen]);
    
  return (
    // <Fragment>  
    //        {
    //         isSidebarOpen &&  
    //         <div ref={sidebarRef} className={`${styles.sidebar_col} ${isSidebarOpen ? 'expanded' : 'collapsed'} col-6 col-sm-2 col-md-2 col-lg-3 pt-4`} >
    //             <Row className='mb-5 d-none d-sm-flex' style={{border:'px solid yellow', justifyContent:'unse'}}>
    //                 <Col xs = '7' lg = "8" style={{border:'px solid yellow'}} className='p-0'>
    //                     <Link to='/'><img className = {`${styles.sidebar_logo}`} src={crack_it_logo} alt=""/></Link>
    //                 </Col>
    //             </Row>

    //             {
    //                 sidebarItems.map((item, index) =>{
    //                     return (
    //                         <Row key={index} className='mb-4 mt-5 mt-sm-0'>
    //                             <Col xs = '7' lg ='8' 
    //                             className={`${styles.sidebar_item_col} p-0 py-2`} 
    //                             style={{border: item.itemName === activeItem ? "2px solid #FF6600":"", cursor:"pointer"}} 
    //                             onClick={()=>{handleSideBarClick(item.itemName, item.itemLink)}}>
    //                             <Row className=' align-items-center m-0 px-3'>
    //                                     {/* <Col xs = "2"  lg ="2" className={`${styles.sidebar_item_icon_col} p-0`} style={{border:'1px solid red'}}>
    //                                         <img src={item.icon} alt="" className={`${styles.sidebar_item_icon} w-50`} style={{border:'1px solid red'}}/>
    //                                     </Col> */}
    //                                     <div className={`${styles.sidebar_item_icon_col} p-0`} style={{border:'px solid red'}}>
    //                                     <img src={item.icon} alt="" className={`${styles.sidebar_item_icon} w-100`} style={{border:'px solid red'}}/>
    //                                     </div>
    //                                     <Col xs = "auto" className={`${styles.sidebar_item} d-sm-none d-lg-block px-2 px-lg-`}>{item.itemName}</Col>

    //                             </Row>
    //                             </Col>
    //                         </Row>
    //                     )
    //                 })
    //             }

    //             <Row style={{marginTop:'270px'}}>
    //                 <Col xs = '10' lg ='8' className={`${styles.sidebar_item_col} p-0 py-2`}>
    //                 <Row className=' align-items-center m-0 px-3'>
    //                         <Col xs = "2"  lg ="2" className={`${styles.sidebar_item_icon_col} p-0`}>
    //                             <img src={logout} alt="" className={`${styles.sidebar_item_icon} w-75`}/>
    //                         </Col>
    //                         <Col xs = "10" className={`${styles.sidebar_item} d-sm-none d-lg-block px-2 px-lg-`}>Log out</Col>

    //                 </Row>
    //                 </Col>
    //             </Row>
    //         </div>
    //        }
        
    //     {
    //         !isSidebarOpen && 
    //         <div className={`${styles.sidebar_col_button} p-0`} >
    //             <button onClick={toggleSidebar}>
    //                 handle
    //             </button>
            
    //         </div>
    //     }
    // </Fragment>
            // <div  >
              <Col className={`col-sm-2 col-md-2 col-lg-3 pt-4 d-none d-sm-block ${styles.offcanvas_col}`}>
                      <Offcanvas show={show} onHide={handleClose} responsive="sm"   className = {`${styles.offcanvas_main}`}>
                    <Offcanvas.Body className={`${styles.sidebar_col}`}>
                      <Container fluid className='p-0 m-0'>
                        <Row className='mb-5 d-none d-sm-flex offcanvas_item justify-content-center'>
                            <Col xs = '7' sm = '9' md = '7' lg = "8" className='p-0'>
                                <Link to='/'><img className = {`${styles.sidebar_logo}`} src={crack_it_logo} alt=""/></Link>
                            </Col>
                        </Row>
                        {
                            sidebarItems.map((item, index) =>{
                                return (
                                    <Row key={index} className='mb-4 mt-5 mt-sm-0 justify-content-center'>
                                        <Col xs = '10' sm = '9' md = '7' lg ='8' 
                                        className={`${styles.sidebar_item_col} p-0 py-2`} 
                                        style={{border: item.itemName === activeItem ? "2px solid #FF6600":"", cursor:"pointer"}} 
                                        onClick={()=>{handleSideBarClick(item.itemName, item.itemLink)}}>
                                        <Row className=' align-items-center m-0 px-3'>
                                                <div className={`${styles.sidebar_item_icon_col} p-0`} style={{border:'px solid red'}}>
                                                <img src={item.icon} alt="" className={`${styles.sidebar_item_icon} w-100`} style={{border:'px solid red'}}/>
                                                </div>
                                                <div className={`${styles.sidebar_item} d-sm-none d-lg-block px-2`}>{item.itemName}</div>

                                        </Row>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                        <Row className={`${styles.offcanvas_item}`} style={{marginTop:'270px', justifyContent:'center'}}>
                            <Col  xs = '10' sm = '9' md = '7' lg = '8' className={`${styles.sidebar_item_col} p-0 py-2`} 
                            onClick={handleLogout}
                            >
                                <Row className=' align-items-center m-0 px-3'>
                                        <div className={`${styles.sidebar_item_icon_col} p-0`} style={{border:'px solid red'}}>
                                                <img src={logout} alt="" className={`${styles.sidebar_item_icon} w-100`} style={{border:'px solid red'}}/>
                                                </div>
                                        <Col xs = "auto" className={`${styles.sidebar_item} d-sm-none d-lg-block px-2 px-lg-`}>Log out</Col>

                                </Row>
                            </Col>
                        </Row>
                        
                      </Container>

                    </Offcanvas.Body>
                </Offcanvas>
              </Col>
            // </div>
  )
}



