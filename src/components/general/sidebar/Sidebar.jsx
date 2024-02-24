import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import crack_it_logo from '../../../assets/images/Crack It, Find It Logo 8.png'

import styles from "./Sidebar.module.css";

export default function ({userSidebarItems}) {
  return (
    <div className={`${styles.sidebar_col} col-3`}>
        <Row className='mb-5'>
            <Col xs = "4">
                <img src={crack_it_logo} alt="" className='w-100'/>
            </Col>
        </Row>

        {
            userSidebarItems.map((item, index) =>{
                return (
                    <Row key={index} className='mb-5'>
                        {/* <Col xs = "2" className='p-0' style={{border:"1px solid red"}}>
                                    <img src={item.icon} alt="" style={{border:"1px solid green"}}/>
                                </Col>
                                <Col xs = "1">{item.itemName}</Col> */}
                        <Col xs ='8 p-0 py-2' className={`${styles.sidebar_item_col}`} style={{border: item.active?"2px solid #FF6600":""}}>
                           <Row className='justify-content-center align-items-center m-0'>
                                <Col xs = "auto" className='p-0'>
                                    <img src={item.icon} alt=""/>
                                </Col>
                                <Col xs = "auto" className={`${styles.sidebar_item}`}>{item.itemName}</Col>

                           </Row>
                        </Col>
                    </Row>
                )
            })
        }
    </div>
  )
}
