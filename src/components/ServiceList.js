import React from "react";
import items from "./item";
import Carousel from 'react-elastic-carousel';



function ServiceList(){
    const breakPoints = [
        {width: 1, itemsToShow: 3},
        {width: 400,itemsToShow: 4},
        {width: 500, itemsToShow: 4},
        {width: 600, itemsToShow: 6},
        {width: 800, itemsToShow: 8},
       
       
       
    ]
    return (
        <Carousel breakPoints={breakPoints}>
         
            {items.map(item => <a href={item.id} ><div className="service-link"><img src={item.icon}/>
            <p>{item.name}</p></div></a>)}
         
         </Carousel>
    )
}

export default ServiceList;