import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FontawsomeIcons";
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from "react-router";
import Footer from './Footer';
import Login from './Login';
import {useAuth0} from "@auth0/auth0-react";




const App = ()=>{
  const { isLoading } = useAuth0();
  if(isLoading) return <div>Loading...</div>
  return(
    <>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Service" component={Service} />
      <Redirect to="/" />
  </Switch>
  <Footer/>
  </>  
  )

}

export default App;
