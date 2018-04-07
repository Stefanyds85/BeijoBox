import React from 'react';
import "./style.css";
import Nav from "../Nav/index.js";
import Jumbotrn from "../Jumbotrn/index.js";
  

const Welcome = (props) => {
	return (
		<div>
			<Nav {...props}/>
			<Jumbotrn/>
			{/* <h1>You should only see this if you are logged in!</h1> */}
			{/* <p>{props.auth.username}</p> */}
			{/* <button onClick={props.handleLogout}>Log Out</button> */}
		
		</div>
	);
}

export default Welcome;