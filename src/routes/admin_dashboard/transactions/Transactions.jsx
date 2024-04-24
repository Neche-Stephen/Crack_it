import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Alert, Spinner, Table } from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

import styles from './Transactions.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

import profile from './asset/profile_icon.svg';
import message from './asset/message.png';
import view from './asset/view.png';

import left_arrow from './asset/left_arrow.svg'
import right_arrow from './asset/right_arrow.svg';
import search_icon from './asset/search_icon.svg';

export default function Transactions() {
    const [loading, setLoading] = useState(true);
    const [transactionArray, setTransactionArray] = useState([]);

    const [fromPageNumber, setFromPageNumber] = useState('');
    const [toPageNumber, setToPageNumber] = useState('');

    const [prevLink, setPrevLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const [disabled, setDisabled] = useState(true);

    const [api, setApi] = useState('https://crackitfindit.rad5.com.ng/api/transactions');

    const [searchQuery, setSearchQuery] = useState(''); // Search query for searching different transactions

    //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Method to set search query
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };

    const filteredTransactionArray = transactionArray.filter(user =>
    user.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const nextPage = () =>{
        console.log('called')
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
            console.log("transac",response.data.data)
            setTransactionArray(response.data.data)
            setPrevLink(response.data.links.prev);
            setNextLink(response.data.links.next);
            setFromPageNumber(response.data.meta.from);
            setToPageNumber(response.data.meta.to);
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

                    <Row className='align-items-center mb-5 mt-4'>
                        <Col xs = 'auto' className='p-0'>
                            <p className={`${styles.profile_title} m-0`}>Transactions</p>
                        </Col>
                        <Col xs = 'auto' className='ms-auto position-relative'>
                            <input type="text" placeholder='Search name' onChange={handleSearch}/>
                            <img src={search_icon} className={`${styles.search_icon}`} alt="" />
                        </Col>

                        <Col xs = 'auto'>
                            <span className={`${styles.count}`}>{fromPageNumber} - {toPageNumber} of 1000</span>
                            <button type='button' className={`${styles.pagination_arrow} me-2`}><img src={left_arrow} alt="" /></button>
                            <button type='button' onClick={nextPage} className={`${styles.pagination_arrow}`}><img src={right_arrow} alt="" /></button>
                        </Col>
                    </Row>

                    <Row className=''>
                        <Col xs = '11'>


                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Date Created</th>
                                    <th scope='col'>Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            filteredTransactionArray.map((user, index) =>{
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
                                       {
                                        user.status === "Pending" ?
                                        <MDBBadge color='warning' pill>Pending</MDBBadge>
                                        :
                                        <MDBBadge color='success' pill>Paid</MDBBadge>
                                       }
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
                            </tbody>
                        </Table>
                        
                           
                        </Col>
                    </Row>        
                
                </Col>
            </Row>
           
         </Container>
    }
    
    </>
    )
}







// {/* <MDBTable responsive hover className={`${styles.tab}`}>
// <MDBTableHead>
//     <tr>
//     <th>S/N</th>
//     <th scope='col'>Name</th>
//     <th scope='col'>Amount</th>
//     <th scope='col'>Status</th>
//     <th scope='col'>Date Created</th>
//     <th scope='col'>Transaction ID</th>
//     </tr>
// </MDBTableHead>
// <MDBTableBody>
//   {
//     transactionArray.map((user, index) =>{
//         return (
//             <tr key={index}>
//             <td>{index + 1}</td>
//             <td>
//                 <div className='d-flex align-items-center'>
//                 <img
//                     src='https://mdbootstrap.com/img/new/avatars/8.jpg'
//                     alt=''
//                     style={{ width: '45px', height: '45px' }}
//                     className='rounded-circle'
//                 />
//                 <div className='ms-3'>
//                     <p className='fw-bold mb-1'>{user.user.name}</p>
//                     <p className='text-muted mb-0'>{user.user.email}</p>
//                 </div>
//                 </div>
//             </td>
//             <td>
//                 <p className='fw-normal mb-1'>{user.currency}</p>
//                 <p className='text-muted mb-0'>{user.amount}</p>
//             </td>
//             <td>
//                 <MDBBadge color='success' pill>
//                 Active
//                 </MDBBadge>
//             </td>
//             <td>{user.date_created}</td>
//             {/* <td>
//                 <MDBBtn color='link' rounded size='sm'>
//                 Edit
//                 </MDBBtn>
//             </td> */}
//             <td>{user.transactionId}</td>
//             </tr>
//         )
//     })
//   }
   
// </MDBTableBody>
// </MDBTable> */}