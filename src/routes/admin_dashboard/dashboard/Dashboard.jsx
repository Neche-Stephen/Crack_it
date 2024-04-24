import React, {useState, useEffect} from 'react';

import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import styles from './Dashboard.module.css';

import users_icon from './asset/users.svg'
import transaction from './asset/transaction.svg';
import transaction_2 from './asset/transaction_2.svg';


import AdminSidebar from '../../../components/admin/adminSidebar/AdminSidebar';
import DashboardNavbar from '../../../components/general/dashboard_navbar/DashboardNavbar';
import axios from 'axios';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [pending_transactions, setPending_transactions] = useState('')
  const [successful_transactions, setSuccessful_transactions] = useState('')
  const [total_transactions, setTotal_transactions] = useState('')
  const [users, setUsers] = useState('')
  const [totalAmount, setTotalAmount] = useState('');

  const navigate = useNavigate();

 //Offcanvas
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

  useEffect( () =>{
    console.log('effect')
    // Make a request for a user with a given ID
      if (sessionStorage['Admin-Token']){
          axios.get('https://crackitfindit.rad5.com.ng/api/dashboard', { 
          headers: {
                  Authorization: "Bearer " + sessionStorage['Admin-Token'],
                  Accept: 'application/json'
          }

          })
          .then(function (response) {
          // handle success
          console.log(response)
          setLoading(false);
          setTotalAmount(response.data.data.total)
          setPending_transactions(response.data.data.pending_transactions)
          setSuccessful_transactions(response.data.data.successful_transactions)
          setTotal_transactions(response.data.data.total_transactions)
          setUsers(response.data.data.users)
          })
          .catch(function (error) {
          // handle error
          console.log(error);
          setLoading(false);

          })
          .then(function () {
          setLoading(false);
          // always executed
          });
      }
      else{
      navigate('/admin-login')

      // alert('odi nkem mere')

      } 

}, [])
 
  return (
   <>
     {
    loading ? 
          <Container className='mt-5'>
            <Row className = 'justify-content-center'>
                <Spinner variant = 'warning' />
            </Row>
          </Container>
    :
      <Container fluid className={`${styles.admin_dashboard}`}>
        <Row>
            <AdminSidebar active="Dashboard" show = {show} handleClose = {handleClose}/>
            <Col className='offset-sm-2 offset-lg-3 ps-3 pe-4'>
              <DashboardNavbar handleShow={handleShow}/>
                <Row className='mt-4'>
                    <Col><p className={`${styles.welcome}`}>Welcome Claire,</p></Col>
                </Row>

                <div className='d-flex flex-wrap justify-content-between'>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={users_icon} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of registered Users</div>
                          <div className={`${styles.widget_value}`}>{users}</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of transactions</div>
                          <div className={`${styles.widget_value}`}>{total_transactions}</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction_2} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of successful transaction</div>
                          <div className={`${styles.widget_value}`}>{successful_transactions}</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction_2} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total number of pending transaction</div>
                          <div className={`${styles.widget_value}`}>{pending_transactions}</div>
                          
                      </div>
                  </div>
                  <div className={`${styles.admin_dashboard_widget}`}>
                      <div className='d-flex flex-column align-items-center'>
                          <div className={`${styles.widget_icon}`}><img src={transaction_2} className='d-block w-100' alt="" /></div>
                          <div className={`${styles.widget_title}`}>Total amount generated</div>
                          <div className={`${styles.widget_value}`}>₦{totalAmount}</div>
                          
                      </div>
                  </div>
                </div>


            
                <Row className='d-none'>
                  <Col md = '6' lg = '4' className='mb-lg-4' >
                    <div className={`${styles.todays_hunt}`}>
                        <h3 className='mb-4'>Today's hunt</h3>
                        <Row className='justify-content-center'>
                          <Col xs = '6'>
                          <button className={`${styles.admin_dashboard_btn}`}>Create new hunt</button>
                          </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col md = '6' lg = '4'>
                    <div className={`${styles.weeks_hunt}`}>
                      <h3 className='mb-4'>This week's hunt</h3>
                      <Row className='justify-content-center'>
                          <Col xs = '6'>
                          <button className={`${styles.admin_dashboard_btn}`}>Create new hunt</button>
                          </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col md = '6' lg = '4'>
                    <div className={`${styles.notification}`}>
                        <h3>Notification</h3>
                        <p>Create</p>
                        <input type="text" placeholder='Write your title here' className='mb-2'/>
                        <textarea name="" id="" placeholder='Write your Message here' className='mb-2'></textarea>
                        <Row className='justify-content-end m-0'>
                            <Col xs = '6'>
                                <button>Send</button>
                            </Col>
                        </Row>
                        {/* <button>Create new hunt</button> */}
                    </div>
                  </Col>

                  <Col md = '6' lg = '4' >
                    <div className={`${styles.months_hunt}`}>
                        <h3 className='mb-4'>This Month's hunt</h3>
                      <Row className='justify-content-center'>
                          <Col xs = '6'>
                          <button className={`${styles.admin_dashboard_btn}`}>Create new hunt</button>
                          </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
            </Col>
        </Row>
      </Container>

   }
   </>
  )
}
