import React, { useState } from 'react'

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
 const Contact = () => {

  const showAlert=()=>{
    alert("Hello please contact me on Whatsapp : 7477246477");
  }

  return (
    <>
    <div id='contactmain' className='container-fluid nav_bg' >
          {/* <h1  className='text-center'>Contact us</h1> */}

<div className='row' >
    <div className='fs-5     col-10 col-md-6 mx-auto  ' > 
   <form id='mainbrand' className='p-3 mt-5 ' action="">
   <div  className="mb-3  ">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input  type="email" className="form-control" id=" logo exampleFormControlInput1"
  name='Emailaddress'
  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  name='Fullname'
  placeholder="shad......"  required/>
</div><div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" 
  name='Phonenumber'
  placeholder="+91........"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea  name="msg " className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='mt-3 mb-3 justify-content-center d-flex '>
    <a id='button' className="fs-5" to="/contact">  <Button onClick={showAlert} size="large" variant="contained" endIcon={<SendIcon />}>
  SUBMIT
</Button> </a>
   </div>
   </form>
    </div>
</div>
</div>
    </>
  )
};
export default Contact;
