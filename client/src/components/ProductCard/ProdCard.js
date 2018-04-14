import React from "react";
import birthdayBox6 from "../Welcome/Images/birthdayBox6.jpg";

export default (props)=>{

    return (
        
        <div className="col-lg-4  col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top img-responsive" src= {birthdayBox6} alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{props.title}</a>
              </h4>
              <h5>{props.price}</h5>
              <p className="card-text">{props.children}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>
    );

} 
