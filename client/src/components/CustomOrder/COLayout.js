import React from 'react';
import Nav from "../Nav/index.js";


export default class Example extends React.Component {
  render() {
    return (
      
      <body>
      <Nav {...this.props}/>

    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">BeijoBox</h1>
          <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
          <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
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
              <img className="img-fluid rounded-circle" src="img/01.jpg" alt=""/>
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


    {/* <!-- Footer --> */}
    <footer className="py-5 bg-black">
      <div className="container">
        <p className="m-0 text-center text-white small">Copyright &copy; BeijoBox 2018</p>
      </div>
      {/* <!-- /.container --> */}
    </footer>

    {/* <!-- Bootstrap core JavaScript --> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  </body>


    );
  }
}
