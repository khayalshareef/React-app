import React, { useState } from 'react';
import Navbar from "./Navbar";

const Contact = ()=>{
    const [data,setdata]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    })
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setdata((preVal)=>{
            return{
                ...preVal,
                [name]:value,
               
            };

        });
    };
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`${data.fullname,data.phone}`);

    }
    return(
        <>
         <Navbar />
       <div className="my-5">
           <div className="text-center">
               <h1>Contact Us</h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter mobile number"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email"/>
                                </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                                    </div>
                                    <div class="col-12">
                                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                    </div>
                            </form>
                   </div>
               </div>
           </div>

       </div>
        </>
    )
   
}
export default Contact;