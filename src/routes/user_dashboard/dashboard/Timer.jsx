import React, { useState, useEffect } from 'react';

const Timer = ({ expiration }) => {
  // console.log(expiration)
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  function calculateTimeLeft() {
    // console.log(expiration);
    // console.log("expiration:", expiration);
    if (!expiration) return; 

    const targetDate = new Date(expiration);
    const now = new Date();
    
    // Calculate the difference in milliseconds
    let difference = targetDate - now;
    
    // Ensure the difference is positive
    if (difference < 0) {
        return '00:00:00'; // If target time is in the past, return 00:00:00
    }
    
    // Convert milliseconds to hours, minutes, and seconds
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Format hours, minutes, and seconds to ensure they are two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // console.log("time", `${hours}:${minutes}:${seconds}`)
    // return `${hours}:${minutes}:${seconds}`;
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
  };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiration]);

  return (
        <>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</>
  );
};

export default Timer;



// import React, { useState, useEffect } from 'react';

// const Timer = ({ expiration }) => {
//   const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

//   useEffect(() => {
//     if (!expiration || isNaN(new Date(expiration))) return; // If expiration is undefined or not a valid date, return early

//     const calculateTimeLeft = () => {
//       const targetDate = new Date(expiration);
//       const now = new Date();
      
//       // Calculate the difference in milliseconds
//       let difference = targetDate - now;
      
//       // Ensure the difference is positive
//       if (difference < 0) {
//           setTimeLeft({ hours: '00', minutes: '00', seconds: '00' }); // If target time is in the past, set time left to 00:00:00
//           return;
//       }
      
//       // Convert milliseconds to hours, minutes, and seconds
//       let hours = Math.floor(difference / (1000 * 60 * 60));
//       let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
//       // Format hours, minutes, and seconds to ensure they are two digits
//       hours = hours < 10 ? '0' + hours : hours;
//       minutes = minutes < 10 ? '0' + minutes : minutes;
//       seconds = seconds < 10 ? '0' + seconds : seconds;

//       setTimeLeft({
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//       });
//     };

//     calculateTimeLeft(); // Call the calculateTimeLeft function immediately
//     const timer = setInterval(calculateTimeLeft, 1000); // Update time left every second

//     return () => clearInterval(timer); // Cleanup function to clear the interval
//   }, [expiration]); // Re-run effect whenever expiration changes

//   return (
//     <>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</>
//   );
// };

// export default Timer;

//Old function that was not working
 // function calculateTimeLeft() {
  //   const now = new Date().getTime();
  //   const expirationTime = new Date(expiration).getTime();
  //   const difference = expirationTime - now;

  //   if (difference <= 0) {
  //     return { hours: '00', minutes: '00', seconds: '00' };
  //   }

  //   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // return {
    //   hours: hours < 10 ? '0' + hours : hours,
    //   minutes: minutes < 10 ? '0' + minutes : minutes,
    //   seconds: seconds < 10 ? '0' + seconds : seconds
    // };
  // }
