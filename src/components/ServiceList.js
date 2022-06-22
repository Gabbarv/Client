import React from "react";
import items from "./item";



function ServiceList(){
    return (
         <div>
            {items.map(item => <a ><div><img src={item.icon}/>
            <p>{item.name}</p></div></a>)}
         </div>
    )
}

export default ServiceList;