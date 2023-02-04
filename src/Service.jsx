import Sdata from'./Sdata'
import React from 'react'
import Card from "./Card";

 const Service = () => {
  return (
    <>
    <div  className='container-fluid nav_bg ' >
<div className='row' >
    <div className='col-10 mx-auto ' > 
        <div className='mt-1 mb-2'>
          {/* <h1 className='text-center'>OUR SERVICES</h1> */}
          <div className='row justify-content-around '>
    {Sdata.map((val,ind) => {
      return <Card key={ind}
      imgsrc={val.imgsrc}
      title={val.title}
      />
    } )}

</div>
        </div>
    </div>
</div>
</div>

    </>
  );
};
export default Service;