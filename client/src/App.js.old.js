import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import ReadyOrder from "./components/ReadyOrder";
import CustomOrder from "./components/CustomOrder";
import Footer from "./components/Footer";
import SignInModal from "./components/SignInModal";
// import SignUpModal from "./components/SignUpModal";


class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
          // <h1>Hello</h1>
      <Router>
        <div>
        {/* <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/welcome" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          } 
        }}/> */}

         <Route exact path = "/" render = {()=> {
            return <Welcome handleLogout = {this.handleLogout} auth = { this.state.auth }/>

          } 
        }/>
        
        {/* <Route exact path = "/signinmodal" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/welcome" />
          } else{
            return <SignUpModal
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            /> */}
          }  
        }}/>

 <Route exact path = "/readyorder" render = {()=> {
          // if(loggedIn){
          //   return <Redirect to = "/welcome" />
          // } else{
           
           return <ReadyOrder
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          // }
        }}/>

        <Route exact path = "/customorder" render = {()=> {
          // if(loggedIn){
          //   return <Redirect to = "/welcome" />
          // } else{
           
           return <CustomOrder
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          // }
        }}/>


        <Route exact path = "/signinmodal" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/" />
          } else {
            return <SignInModal 
              handleLogout = {this.handleLogout} 
              auth = { this.state.auth }
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />

          } 
        }
        }/>
        </div>
      </Router>
      
    );
  }
}

export default App;