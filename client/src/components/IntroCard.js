import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import SignUp from "./SignUp";

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
    
      overlay={<CardTitle title="Welcom to BeijoBox!!" subtitle="The pefect gift box for any occation..." />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardText>
      Allow Us to create the perfect gift box for you, your loved ones and any special event. BeijoBox is ready to fulfill all of your needs for any special occasion and corporate event!
    </CardText>
    <CardActions>
      <FlatButton label="Shop BeijoBox Ready" />
      <FlatButton label="Shop BeijoBox Custom" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;