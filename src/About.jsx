import React from 'react'
import { NavLink } from 'react-router-dom';
import png from "./image/shadab2.jpg"

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
 const About = () => {
  return (
    <>
        

    <section id='header' className='d-flex align-items-center' >
    <div className='container-fluid nav_bg' >
<div className='row' >
    <div className='col-10 mx-auto pt-3' > 
<div className='row' >

        <div className='col-lg-6 d-flex justify-content-end mt-5 order-1 order-lg-2 header-img'>
          <img src={png} alt="sk" id='mainimg' style={{width:"30rem"}} className=' d-flex justify-content-end' />
        </div>
        <div className='col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column '  >
<h2 id='mainbrand' className='text-center' >ABOUT ME</h2>
<h4 id='h4' className='my-4 ' >
I started my coding journey almost exactly a year ago and now I'm working full time and doing freelance projects on the side for my friends. You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals.
   </h4>
   <div className='mt-3 mb-5 justify-content-center d-flex '>
    <NavLink id='button' className="fs-5" to="/contact">  <Button size="large" variant="contained" endIcon={<SendIcon />}>
  Contact me
</Button> </NavLink>
   </div>
        </div>

        </div>

    </div>
</div>
</div>
</section>




    </>
  )
}
export default About;
