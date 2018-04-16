  import React from 'react';
  import {Link} from 'react-router-dom';
  import SignInModal from "../SignInModal";
  import SignUpModal from "../SignUpModal";
  import Welcome from "../Welcome";
  
  export default class Nav extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (

      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="../">BeijoBox</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signinmodal">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signupmodal">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      );
    }
  }
  