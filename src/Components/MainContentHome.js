import React from 'react';
import port from '../Images/port.png'

function MainContentHome() {
  return (
    <div className='mainContentContainer'>
        <div>
            <h3 className='firstName'>
                Arthur Bernardo Messias
            </h3>
            <h2 className='wantedJob'>Front-end Developer</h2>
            <p className='description'> A lover of technology, looking for new challenges and opportunities </p> 
        <img src={port} alt='arthur' className='portImage' />
        </div>
    </div>
  );
}

export default MainContentHome;
