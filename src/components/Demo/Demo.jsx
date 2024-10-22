/* eslint-disable react/no-unescaped-entities */

import './cta.css' 

const Demo = () => {
  return (
    <div className='DemoSection'>
       <div>
        <h1>Book a demo</h1>
      </div>
      <div className='DemoSection-content'>
        <p>Our video output beats te likes of Google Vlogger, <br />
        and at par with Microsoft's VASA-1 & Alibaba's EMO</p>
        <div className='Subscribe'>
        <input type="mail" placeholder='Email' className='Email'/>
        <span><button className='Subscribe-btn'>Subscribe</button></span>
        </div>
      </div>
    </div>
  )
}

export default Demo