import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import crack_it_logo from '../../../assets/images/Crack It, Find It Logo 8.png'

import styles from "./Sidebar.module.css";
import logout from '../../../assets/images/logout_side.png';

export default function ({sidebarItems, active}) {
    const [activeItem, setActiveItem] = React.useState(active);
    // const [mobileClicked, setMobileClicked] = React.useState(active);
    const mobileRef = React.useRef();
    const tabDeskRef = React.useRef();

    const navigate = useNavigate();
   
    const handleSideBarClick = (item, link)=>{
        setActiveItem(item);
        navigate(link);
    }

    const handleMobileClick = () =>{

        tabDeskRef.current.style.display = tabDeskRef.current.style.display === 'block' ? 'none' : 'block';
        mobileRef.current.style.display = tabDeskRef.current.style.display === 'block' ? 'none' : 'block';

        // tabDeskRef.current.style.display = 'block'
        // mobileRef.current.style.display = "none"

    }
  return (
    <>
        <div className={`${styles.sidebar_col} col-4 col-sm-2 col-md-2 col-lg-3`} ref={tabDeskRef}>
            <Row className='mb-5'>
                <Col lg = "4">
                    <Link to='/'><img src={crack_it_logo} alt="" className='w-100'/></Link>
                </Col>
            </Row>

            {
                sidebarItems.map((item, index) =>{
                    return (
                        <Row key={index} className='mb-5'>
                            {/* <Col xs = "2" className='p-0' style={{border:"1px solid red"}}>
                                        <img src={item.icon} alt="" style={{border:"1px solid green"}}/>
                                    </Col>
                                    <Col xs = "1">{item.itemName}</Col> */}
                            <Col xs = '10' lg ='8' className={`${styles.sidebar_item_col} p-0 py-2`} style={{border: item.itemName === activeItem ? "2px solid #FF6600":"", cursor:"pointer"}} onClick={()=>{handleSideBarClick(item.itemName, item.itemLink)}}>
                            <Row className='justify-content-center align-items-center m-0'>
                                    <Col xs = "auto" className={`${styles.sidebar_item_icon_col} p-0`}>
                                        <img src={item.icon} alt="" className={`${styles.sidebar_item_icon}`}/>
                                    </Col>
                                    <Col xs = "auto" className={`${styles.sidebar_item} d-sm-none d-lg-block px-2 px-lg-`}>{item.itemName}</Col>

                            </Row>
                            </Col>
                        </Row>
                    )
                })
            }

                        <Row  style={{marginTop:'100px'}}>
                            <Col xs = '10' lg ='8' className={`${styles.sidebar_item_col} p-0 py-2`}>
                            <Row className='justify-content-center align-items-center m-0'>
                                <Col xs = "auto" className={`${styles.sidebar_item_icon_col} p-0`}>
                                    <img src={logout} alt="" className={`${styles.sidebar_item_icon}`}/>
                                </Col>
                                <Col xs = "auto" className={`${styles.sidebar_item} d-sm-none d-lg-block px-2 px-lg-`}>Log out</Col>

                            </Row>
                            </Col>
                        </Row>
            <button className={`${styles.sidebar_col_Mob_btn} d-none`} onClick={handleMobileClick}>

            </button>
        </div>

        <div ref={mobileRef} className={`${styles.sidebar_col_button} p-0`} >
            <button onClick={handleMobileClick}>

            </button>
            
        </div>
    </>
  )
}
