import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import styles from './DailyQuestModal.module.css'

import day_check from './asset/day_check.png';

import TodayChallengeModal from './TodayChallengeModal/TodayChallengeModal';

export default function DailyQuestModal(props) {
  const numberOfDivs = Array.from({ length: 30 }, (_, index) => index + 1);
  const [todayDailyChallenge, setTodayDailyChallenge] = React.useState(false);
  
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
   
    <Modal.Body  className={`${styles.daily_quest_modal_body} p-0`} >
        <div className='row justify-content-center'>
              <div className='col-8'>
                <div className={`${styles.calendar_hook}`}>
                    <p className={`${styles.calendar_month}`}>FEBRUARY DAILY QUEST</p>
                </div>
              </div>
        </div>
      <div className='row justify-content-center'>
        <div className='col-11'>
        <div className={`${styles.daily_quest_days_container}`}>
          <div className={`${styles.daily_quest_days} row m-0 p-5`}>

          {numberOfDivs.map((item) => (
           <div className={`${styles.daily_quest_day} col-3`} onClick={() => setTodayDailyChallenge(true)}>
            <p className={`${styles.daily_quest_day_text}`}>DAY 1</p>
            <img src={day_check} alt="" />
        </div>
          ))}
            
          </div>
        </div>
        </div>
      </div>
    </Modal.Body>

    <TodayChallengeModal 
      show={todayDailyChallenge}
      onHide={() => setTodayDailyChallenge(false)}
    />
    {/* <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer> */}
  </Modal>
  )
}
