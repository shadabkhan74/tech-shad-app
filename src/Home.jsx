import React from 'react'
import { NavLink } from 'react-router-dom';
import png from "./image/png11.avif"

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
 const Home = () => {
  return (<>
  <section id='header' className='d-flex align-items-center' >
    <div className='container-fluid nav_bg' >
<div className='row' >
    <div className='col-10 mx-auto pt-3' > 
<div className='row' >

        <div className='col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column '  >
<h2>Grow your bussiness <br /> with  <span id='mainbrand' className='brand-name text-primary fs-1' >SHADAB KHAN.</span> </h2>
<h4 id='h4' className='my-4 ' > I am shadab khan i am a freelancer web developer. I develop this website on react js </h4>
   <div className='mt-3'>
    <NavLink id='button' className="fs-5" to="/service">  <Button size="large" variant="contained" endIcon={<SendIcon />}>
  Get started
</Button> </NavLink>
   </div>
        </div>

        <div className='col-lg-6 mt-5 order-1 order-lg-2 header-img'>
          <img src={png} alt="sk" id='sk' className='img-fluid animated' />
        </div>
        </div>

    </div>
</div>
</div>
</section>

    </>  )
};
export default Home;
