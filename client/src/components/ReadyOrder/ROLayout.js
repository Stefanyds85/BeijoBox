import React from 'react';
import Nav from "../Nav";
import {Link} from 'react-router-dom';
import birthdayBox6 from "../Images/birthdayBox6.jpg";
import anniversaryBox3 from "../Images/anniversaryBox3.jpg";
import corporateBox2 from "../Images/corporateBox2.jpg";

import "./style.css";

import ProdCard from "../ProductCard/ProdCard";
import ProductPg from "../Products/ProductPg";
import COLayout from "../CustomOrder/COLayout";


export default class Example extends React.Component {

  state = {
    name: [],
    category: "",
    price: "",
    products:[],
    
  };

  // componentDidMount() {
  //   this.loadBox();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {

    const productSeed = [
       
      {
        name: "Fashion Clutch",
        price: "$39.99",
        description: "Ladies fashion black leather clutch.  ",
      },
      {
        name: "Beats headphones", price: "$59.99", description: "wireless headphones that can be used during activiteds like working out.",
      },
      {
        name: "Champagne Flutes",
        price: "$65.00",
        description: "2 Crystal champagne flutes.",
      },
      {
        name: "Beats headphones",
        price: "$59.99",
        description: "wireless headphones that can be used during activiteds like working out.",
      },
      {
        name: "Beats headphones",
        price: "$59.99",
        description: "wireless headphones that can be used during activiteds like working out.",
      }
    
    ];
  
    return (
      <body>
      <div>
        <Nav {...this.props}/>
      </div>



{/* <!-- Page Content --> */}
<div className="container">

  <div className="row">

    <div className="col-lg-3">

      <h1 className="my-4">BeijoBox</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Birthdays</a>
        <a href="#" className="list-group-item">Anniversary</a>
        <a href="#" className="list-group-item">Corporate Celebrations</a>
        <a href="#" className="list-group-item">Birthdays</a>
        <br/>
        <Link className="navbar-brand" to="../CustomOrder">Custom Orders</Link>
        <Link className="navbar-brand" to="../Products">Procuct List</Link>
      </div>

    </div>
    {/* <!-- /.col-lg-3 --> */}

    <div className="col-lg-9">

      <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid img-responsive" src={corporateBox2} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluidimg-responsive" src= {anniversaryBox3} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluidimg-responsive" src= {birthdayBox6} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="row">

        <ProdCard title={productSeed[0].name} price={productSeed[0].price} > 
          {productSeed[0].description}
        </ProdCard>

         <ProdCard title={productSeed[1].name} price={productSeed[1].price} > 
          {productSeed[1].description}
        </ProdCard>

         <ProdCard title={productSeed[2].name} price={productSeed[2].price} > 
          {productSeed[2].description}
        </ProdCard>

         <ProdCard title={productSeed[3].name} price={productSeed[3].price} > 
          {productSeed[3].description}
        </ProdCard>

         <ProdCard title={productSeed[4].name} price={productSeed[4].price} > 
          {productSeed[4].description}
        </ProdCard>

      </div>
      <row></row>

    </div>
    <col-lg-9/>

  </div>
  <row></row>

</div>

<footer className="py-5 bg-black">
  <div className="container">
    <p className="m-0 text-center text-white">Copyright &copy; BeijoBox 2018</p>
  </div>
</footer>

</body>

    );
  }
}

