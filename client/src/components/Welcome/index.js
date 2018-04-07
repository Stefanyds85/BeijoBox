import React from 'react';
import "./style.css";
import Nav from "../Nav/index.js";
import Jumbotrn from "../Jumbotrn/index.js";
import ReadyPgBtn from "../Buttons/ReadyBtn";
import CustomPgBtn from "../Buttons/CustomBtn";
import {NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';
import Footer from "../Footer/index.js";


  

const Welcome = (props) => {
	return (
		<div>
			<Nav {...props}/>
			<Jumbotrn/>

			<div className="buttons">
				<Link to="/readyorder"><ReadyPgBtn/> </Link>
				<Link to="/customorder"><CustomPgBtn/> </Link>
			</div>
			
			<div>
			<Footer/>
			</div>

		</div>

		

	);
}

export default Welcome;