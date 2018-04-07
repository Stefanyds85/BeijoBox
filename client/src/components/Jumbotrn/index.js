import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const Example = (props) => {
  return (
    <div ClassName = "jumbotrn">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to BeijoBox!!</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>create the perfect boxed gift for any occasion!
      </Jumbotron>
    </div>
  );
};

export default Example;