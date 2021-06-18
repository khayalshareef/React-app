import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/car.jpg";


const Card = (props)=>{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="imgsiz img-fluid" src={props.imgsrc} alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title">{props.Tittle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
   
}
export default Card;