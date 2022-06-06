import React from "react";
import { useSelector } from "react-redux";
import './Home.css'

function Login(){

   return(
       <div className="parentDiv">
           <div className="imgDiv"></div>
           <div className="loginPage">
               <div className="logoDiv"></div>
               <h2 className="loginTxt">Login</h2>
           </div>

       </div>

   )
    
}

export default Login