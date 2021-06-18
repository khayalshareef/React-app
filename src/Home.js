import React from 'react';
import Common from './Common';
import img from "../src/images/pc.png";
import Navbar from "./Navbar";
import { Redirect } from 'react-router';
const Home = ()=>{
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token === null){
        loggedIn = false
    }
    if(loggedIn === false){
        return<Redirect to="/"/>
    }
    return(
       
        <>
         <Navbar />
        <Common name=' Grow your work with'
            imgsrc={img}
             visit="/Service"
             btname="Get Started"/>
        </>
    )
   
}
export default Home;
