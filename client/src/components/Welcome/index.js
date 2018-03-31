import React from 'react';
import "./style.css";
import Nav from "../Nav.js";
import IntroCard from "../IntroCard.js";
import SignInModal from "../SignInModal.js";


const Welcome = (props) => {
	return (
		<div>
			<Nav/>
			
			<SignInModal/>

			<h1>You should only see this if you are logged in!</h1>
			<p>{props.auth.username}</p>
			<button onClick={props.handleLogout}>Log Out</button>
		
			<IntroCard/>
		</div>
	);
}

export default Welcome;