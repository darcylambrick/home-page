import React from 'react';
import './Footer.css';

function Footer ()
{
    return <div className='footer-div'>
    <div className='signup-div'>
        <p>SIGN UP FOR OUR DAILY INSIDER</p>
        <input placeholder='Enter your email' type='email' />
        <button className='email-subscribe-button' type='submit'>Subscribe</button>
    </div>
    
    </div>
}

export default Footer