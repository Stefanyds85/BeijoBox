import React from 'react';
import "./style.css";
import Nav from "../Nav/index.js";
import ReadyPgBtn from "../Buttons/ReadyBtn";
import CustomPgBtn from "../Buttons/CustomBtn";
import {Link} from 'react-router-dom';
import birthdayMain from "./Images/birthdayMain.jpg";
import anniversaryMain from "./Images/anniversaryMain.jpg";
import corporateMain from "./Images/corporateMain.jpg";

  

const Welcome = (props) => {
	return (

		<body>


		<Nav {...this.props}/>

		<header className="masthead text-center text-white">
		  <div className="masthead-content">
			<div className="container">
			  <h1 className="masthead-heading mb-0">BeijoBox</h1>
			  <h2 className="masthead-subheading mb-0">The best gift box for any occasion!</h2>
			  {/* <a href="/readyorder" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a> */}
			  <div className="buttons">
				<Link to="/readyorder"><ReadyPgBtn/> </Link>
				<Link to="/customorder"><CustomPgBtn/> </Link>
			</div>
			</div>
		  </div>
		  <div className="bg-circle-1 bg-circle"></div>
		  <div className="bg-circle-2 bg-circle"></div>
		  <div className="bg-circle-3 bg-circle"></div>
		  <div className="bg-circle-4 bg-circle"></div>
		</header>
	
		<section>
		  <div className="container">
			<div className="row align-items-center">
			  <div className="col-lg-6 order-lg-2">
				<div className="p-5">
				  <img className="img-fluid rounded-circle" src={birthdayMain} alt=""/>
				</div>
			  </div>
			  <div className="col-lg-6 order-lg-1">
				<div className="p-5">
				  <h2 className="display-4">For those about to rock...</h2>
				  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
				</div>
			  </div>
			</div>
		  </div>
		</section>
	
		<section>
		  <div className="container">
			<div className="row align-items-center">
			  <div className="col-lg-6">
				<div className="p-5">
				  <img className="img-fluid rounded-circle" src={anniversaryMain} alt=""/>
				</div>
			  </div>
			  <div className="col-lg-6">
				<div className="p-5">
				  <h2 className="display-4">We salute you!</h2>
				  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
				</div>
			  </div>
			</div>
		  </div>
		</section>
	
		<section>
		  <div className="container">
			<div className="row align-items-center">
			  <div className="col-lg-6 order-lg-2">
				<div className="p-5">
				  <img className="img-fluid rounded-circle" src={corporateMain} alt=""/>
				</div>
			  </div>
			  <div className="col-lg-6 order-lg-1">
				<div className="p-5">
				  <h2 className="display-4">In recognition of your team!</h2>
				  <p>Let us help make your corporate celebration all the more special. Our gift boxes will add just the right finishing touch in recognition of your team's hard work!</p>
				</div>
			  </div>
			</div>
		  </div>
		</section>
	
		{/* <!-- Footer --> */}
		<footer className="py-5 bg-black">
		  <div className="container">
			<p className="m-0 text-center text-white small">Copyright &copy; BeijoBox.com 2018</p>
		  </div>
		  {/* <!-- /.container --> */}
		</footer>
	
		{/* <!-- Bootstrap core JavaScript --> */}
		<script src="vendor/jquery/jquery.min.js"></script>
		<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	
	  </body>






		// <div>
			

		// 	<div className="buttons">
		// 		<Link to="/readyorder"><ReadyPgBtn/> </Link>
		// 		<Link to="/customorder"><CustomPgBtn/> </Link>
		// 	</div>
			
			

		// </div>

		

	);
}

export default Welcome;