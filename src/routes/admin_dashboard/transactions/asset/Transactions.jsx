import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

import styles from './Transactions.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

import profile from './asset/profile_icon.svg';
import message from './asset/message.png';
import view from './asset/view.png';

export default function Transactions() {
    const [loading, setLoading] = useState(true);
    const [transactionArray, setTransactionArray] = useState('')

    const [prevLink, setPrevLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const [disabled, setDisabled] = useState(true);

    const [api, setApi] = useState('https://crackitfindit.rad5.com.ng/api/transactions');

    //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nextPage = () =>{
        setApi(nextLink)
    }

    useEffect(() =>{
        axios.get(api, { 
            headers: {
                Authorization: "Bearer " + sessionStorage['Admin-Token'],
                Accept: 'application/json'
            }
         })
        .then(function (response) {
            // handle success
            console.log(response)
            setTransactionArray(response.data.data)
            setPrevLink(response.data.links.prev)
            setNextLink(response.data.links.next)
            setLoading(false);
        })
        .catch(function (error) {
            // handle error
            setLoading(false);
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }, [api])

  return (
    <>

    {
        loading ? 
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Spinner  variant = 'warning'/>
            </Row>
        </Container>
        :
        <Container fluid className={`${styles.profile}`}>
            <Row>
                <AdminSidebar active = 'Transactions' show = {show} handleClose = {handleClose}/>
                <Col className='offset-sm-2 offset-lg-3 ps-4'>
                    <DashboardNavbar  handleShow={handleShow}/>

                    <Row className='align-items-center mb-5'>
                        <Col xs = 'auto' className='p-0'>
                            <p className={`${styles.profile_title}`}>Transactions</p>
                        </Col>
                        <Col xs = 'auto' className='ms-auto'>
                            <input type="text" placeholder='Search name'/>
                        </Col>

                        <Col xs = 'auto'>
                            <span className={`${styles.count}`}>1 - 4 of 1000</span>
                            <button type='button'><img src={left_arrow} alt="" /></button>
                            <button type='button' onClick={nextPage}><img src={right_arrow} alt="" /></button>
                        </Col>
                    </Row>

                    <Row className=''>
                        <Col xs = '11'>

                        <MDBTable responsive hover className={`${styles.tab}`}>
                        <MDBTableHead>
                            <tr>
                            <th>S/N</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Date Created</th>
                            <th scope='col'>Transaction ID</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {
                            transactionArray.map((user, index) =>{
                                return (
                                    <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{user.user.name}</p>
                                            <p className='text-muted mb-0'>{user.user.email}</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>{user.currency}</p>
                                        <p className='text-muted mb-0'>{user.amount}</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='success' pill>
                                        Active
                                        </MDBBadge>
                                    </td>
                                    <td>{user.date_created}</td>
                                    {/* <td>
                                        <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                        </MDBBtn>
                                    </td> */}
                                    <td>{user.transactionId}</td>
                                    </tr>
                                )
                            })
                          }
                           
                        </MDBTableBody>
                        </MDBTable>
                        
                           
                        </Col>
                    </Row>        
                
                </Col>
            </Row>
           
         </Container>
    }
    
    </>
    )
}
