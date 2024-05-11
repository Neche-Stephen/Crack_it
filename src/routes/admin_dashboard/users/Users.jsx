import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Alert, Spinner , Table} from 'react-bootstrap';
import axios from 'axios';

import styles from './Users.module.css';

import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';

import profile from './asset/profile_icon.svg';
import message from './asset/message.png';
import view from './asset/view.png';

import left_arrow from './asset/left_arrow.svg'
import right_arrow from './asset/right_arrow.svg';
import search_icon from './asset/search_icon.svg';


export default function Users() {
    const [loading, setLoading] = useState(true);
    const [userArray, setUserArray] = useState([]);
    const [fromPageNumber, setFromPageNumber] = useState('');
    const [toPageNumber, setToPageNumber] = useState('');

    const [searchQuery, setSearchQuery] = useState('');
    //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [prevLink, setPrevLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const [disabled, setDisabled] = useState(true);

    const [api, setApi] = useState('https://crackitfindit.com/api/users');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };

    const filteredUserArray = userArray.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const nextPage = () =>{
        console.log('called next')
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
            setLoading(false)
            console.log("here", response.data.data)
            setUserArray(response.data.data)
            setPrevLink(response.data.links.prev)
            setNextLink(response.data.links.next);
            setFromPageNumber(response.data.meta.from);
            setToPageNumber(response.data.meta.to)
            
        })
        .catch(function (error) {
            // handle error
            setLoading(false)
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
                <AdminSidebar active = 'Users' show = {show} handleClose = {handleClose}/>
                <Col className='offset-sm-2 offset-lg-3 ps-4'>
                    <DashboardNavbar  handleShow={handleShow}/>

                    <Row className='align-items-center mb-5 mt-4'>
                        <Col xs = 'auto' className='p-0'>
                            <p className={`${styles.profile_title} m-0`}>Users</p>
                        </Col>
                        <Col xs = 'auto' className='ms-auto position-relative'>
                            <input type="text" placeholder='Search name' onChange={handleSearch}/>
                            <img src={search_icon} className={`${styles.search_icon}`} alt="" />
                        </Col>

                        <Col xs = 'auto'>
                            <span className={`${styles.count}`}>{fromPageNumber} - {toPageNumber} of 1000</span>
                            <button type='button' className={`${styles.pagination_arrow} me-2`}><img src={left_arrow} alt="" /></button>
                            <button type='button' className={`${styles.pagination_arrow}`} onClick={nextPage}><img src={right_arrow} alt="" /></button>
                        </Col>
                    </Row>

                    <Row className=''>
                        <Col xs = '11'>
                           {/* {
                            filteredUserArray.map((user, index) => {
                                return(
                                    <Row key = {index} className={`${styles.user_row} align-items-center mb-4 px-2 py-3 px-sm-4`}>
                                    <Col xs = 'auto' className={`${styles.profile_icon_col} p-0`}>
                                        <img src={profile} alt="" className=' w-100'/>
                                    </Col>
                                    <Col xs = 'auto'>
                                        <p className={`${styles.profile_name} mb-1`}>{user.name}</p>
                                        <p className={`${styles.profile_desc}`}>-</p>
                                    </Col>
                                    <Col xs = 'auto' className='ms-auto'>
                                        <button className={`${styles.profile_btn} mb-2 `}>
                                            <span className='me-2 d-none d-sm-inline'>Message</span>
                                            <span><img src={message} alt="" /></span>
                                        </button>
                                        <button className={`${styles.profile_btn}`}>
                                            <span className='me-2 d-none d-sm-inline'>View</span>
                                            <span><img src={view} alt="" /></span>
                                        </button>
                                    </Col>
                                </Row>
                                )
                            })
                           } */}

<                       Table hover responsive>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Age</th>
                                    <th scope='col'>Phone</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Address</th>
                                    <th scope='col'>Date registered</th>
                                    <th scope='col'>Gender</th>
                                    <th scope='col'>Nationality</th>

                                </tr>
                            </thead>
                            <tbody>
                            {
                            filteredUserArray.map((user, index) =>{
                                return (
                                    <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                     {user.name}
                                    </td>
                                    <td>
                                     {user.age}
                                    </td>
                                    <td>
                                       {user.phone}
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.date_registered}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.nationality}</td>
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
