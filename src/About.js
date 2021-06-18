import React from 'react';
import img from "../src/images/about.jpg";
import Common from './Common';
import Navbar from "./Navbar";

const About = ()=>{
    return(
        <>
         <Navbar />
           <Common name='Welcome About page'
            imgsrc={img}
             visit="Contact"
             btname="Contact Now"/>
        </>
    )
   
}
export default About;
