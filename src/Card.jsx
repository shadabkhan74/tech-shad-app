import React from 'react'
const Card = (props) => {
  return (
    <div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
  <div className="card-body">
    <h5 id='mainbrand' className="card-title text-uppercase text-center">{props.title}</h5>
    
    
  </div>
</div>
  )
}

export default Card