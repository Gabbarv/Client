import React from "react";

import "./Card.css"




function Card(props){
    
return (
   <div data-aos="fade-up"
   data-aos-duration="1000" key={props.id} id={props.id} className="card">
       <div>
       <img key={props.id} id={props.id} className="img" src={props.img} />
       { props.price && <div className="price">
           <p><i class="fa fa-rupee-sign"></i>&nbsp;400 Only</p>
       </div> }
       </div>
      
       
       <h5  id={props.id} >{props.service}</h5>
      
      
   </div>

)

}
export default Card;