import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input value= {this.props.username} onchange = {this.props.handleChange} type="email" name="username"  placeholder="exampleemail@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input value= {this.props.username} onchange = {this.props.handleChange} type="password" name="password"   />
        </FormGroup>
       
        <Button type = "Submit" name = "/auth/signup" onClick = {this.props.handleSubmit}> Submit</Button>
      </Form>

      
    );
  }
}