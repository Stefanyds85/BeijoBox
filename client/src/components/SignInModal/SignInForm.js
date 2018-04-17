import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';


export default class SignInForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input value= {this.props.username} onChange = {this.props.handleChange} type="email" name="username"  placeholder="exampleemail@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input value= {this.props.password} onChange = {this.props.handleChange} type="password" name="password"   />
        </FormGroup>
       
        <Button type = "submit" name = "/auth/signin" onClick = {this.props.handleSubmit}> Submit</Button>
      </Form>

      
    );
  }
}