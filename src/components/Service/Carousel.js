import React from "react";
import Carousel from 'react-elastic-carousel';
import useWindowDimensions from "../Width";
import Card from "./Card";


function Slide({items,loggedIn,setLoggedin}){
    const {height,width} = useWindowDimensions();
    const breakPoints = [
        {width: 500,itemsToShow: 3},
        {width: 800,itemsToShow: 4},
        {width: 1232,itemsToShow: 4}
       
    ]
    return (
        <>
       { width > 600 ? <Carousel breakPoints={breakPoints}>  
           {items.map(item => <Card loggedIn={loggedIn} setLoggedin={setLoggedin} item = {item}/>)}
        </Carousel> : <div className="service-m">
        {items.map(item => <Card loggedIn={loggedIn} setLoggedin={setLoggedin} item = {item}/>)}</div>}
        </>
    )
}

export default Slide; 