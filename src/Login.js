import React, { Component } from "react";
import { Redirect } from "react-router";
import { NavLink } from 'react-router-dom';
import background from "../src/images/bgi.jpg";

export default class Login extends Component{
    constructor(props){
        super(props)
        let loggedIn = false
        this.state={
            username:'',
            password:'',
            loggedIn

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    submitForm(e){
        e.preventDefault();
        const { username, password} = this.state
        if(username === "admin" && password ==="123"){
            localStorage.setItem("token","asdasdasfda")
            this.setState({
                loggedIn : true
            })
        }

    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to="/Home"/>
        }
        return(
            <>
                <div className="row" style={{ backgroundImage: `url(${background})`,width:"100%",height:"auto" }}>
                    <div className="col-10 mx-auto">
                        <div className="row wrapper ">
                            {/* <div className="col-md-4 order-2 order-1 d-flex justify-content-center flex-column mx-auto">
                                <img src={img} className=" example img-fluid animated" style={{borderRadius:"20px"}} />

                            </div> */}

                            <div className="col-lg-4 order-1 order-2 header-img mx-auto " style={{marginTop:"200px"}} >
                               <div style={{border:"2px solid #6c757d",borderRadius:"5px",padding:"30px 30px 30px"}}>
                                <form onSubmit={this.submitForm} >
                                    <div className="row mb-3">
                                        <label for="inputEmail3" >UserName</label>
                                        <div className="text-center">
                                            <input type="text" className="form-control" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputPassword3" >Password</label>
                                        <div className="text-center ">
                                            <input type="password" className="form-control " placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-outline-primary" >Login</button>
                                    </div>
                                </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            
           
        </>
        )
    }
}