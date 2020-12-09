import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Home extends React.Component{
  render(){
    return(
      <div className="logbog">
      


  <div className="viewhead1" >


  <div className="row main-section content">

    <div className="col-lg-6">
      <h1 className="big-heading">Hire the best freelancers for any job, online or earn money freelancing</h1>
      <Link to="/login">
        <button type="button" className="btn btn-outline-light btn-lg download-button earn">Login</button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn btn-outline-light btn-lg download-button earn">Sign Up</button>
      </Link>
    </div>
  </div>

  </div>

  <section className="white-section features" >

    <div className="container-fluid">
      <h1 className="feature-heading">Get your work done in many categories.</h1>
      <div className="row">
        <div className="feature-box col-lg-4">
          <i className="icon fab fa-apple fa-5x"></i>
          <h3 className="feature-title">iPhone Apps.</h3>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fab fa-android fa-5x"></i>
          <h3 className="feature-title">Android Apps.</h3>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fas fa-mobile-alt fa-5x"></i>
          <h3 className="feature-title">Mobile Apps.</h3>
        </div>
      </div>

      <div className="row">
        <div className="feature-box col-lg-4">
          <i className="icon far fa-window-maximize fa-5x"></i>
          <h3 className="feature-title">Website Design.</h3>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fab fa-html5 fa-5x"></i>
          <h3 className="feature-title">HTML5.</h3>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fab fa-js fa-5x"></i>
          <h3 className="feature-title">Javascript.</h3>
        </div>
      </div>

      <div className="row">
        <div className="feature-box col-lg-4">
          <i className="icon fab fa-aws fa-5x"></i>
          <h3 className="feature-title">Amazon Web services.</h3>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fab fa-python fa-5x"></i>
          <h3 className="feature-title">Python</h3>
        </div>

        <div className="feature-box col-lg-4">
          <i className="icon fab fa-php fa-5x"></i>
          <h3 className="feature-title">PHP.</h3>
        </div>
      </div>


    </div>
  </section>


  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">

      <div className="carousel-item active">

        <div className="view details car-item1" >

          <div className="heading-div">
            <h1 className="heading">Need to get <br/>something done?</h1>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="view details car-item2" >
          <h1 className="heading" style={{padding:"180px 50px 0"}}>1.Post a job</h1>
          <p className="description">Simply post a job which you need completed <br/> and receive competitive bids from freelancers. </p>
        </div>
      </div>

      <div className="carousel-item">
        <div className="view details car-item3" >
          <h1 className="heading" style={{padding:"150px 50px 0"}}>2.Choose freelancers</h1>
          <p className="description">Get all your needs done by choosing <br/> a freelancer as per your wish.</p>
        </div>
      </div>



      <div className="carousel-item">
      <div className="view details car-item5">
        <h1 className="heading" style={{fontSize:"5rem"}}>Millions of people use <br/><span className="brand-name">freeLancer</span> to turn their ideas <br/> into reality.</h1>
      </div>
    </div>
    </div>

    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>


<section className="white-section features">
  <div className="container-fluid">
    <h1 className="feature-heading">What's great about it?</h1>
    <div className="row">
      <div className="feature-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="feature-title">Easy to use.</h3>
        <p>Easy and simple to use.</p>
      </div>
      <div className="feature-box col-lg-4">
        <i className="icon fas fa-user fa-4x"></i>
        <h3 className="feature-title">Browse portfolios.</h3>
        <p>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
      </div>

      <div className="feature-box col-lg-4">
        <i className="icon fas fa-heart fa-4x"></i>
        <h3 className="feature-title">Guaranteed to work.</h3>
        <p>Find the best freelancer who can work for you.</p>
      </div>
    </div>

    <div className="row">
      <div className="feature-box col-lg-4">
        <i className="icon fab fa-paypal fa-4x"></i>
        <h3 className="feature-title">Pay for quality.</h3>
        <p>Pay for the work when it is completed and you are 100% satisfied .</p>
      </div>

      <div className="feature-box col-lg-4">
        <i className="icon far fa-clock fa-4x"></i>
        <h3 className="feature-title">Track progress.</h3>
        <p>Keep up-to-date and on-the-go with our time tracker.</p>
      </div>

      <div className="feature-box col-lg-4">
        <i className="icon fas fa-question fa-4x"></i>
        <h3 className="feature-title">24/7 Support.</h3>
        <p>We're always here to help.</p>
      </div>
    </div>
  </div>
</section>


<footer className="footer-section" id="footer">
<div className="container-fluid">
<h1 style={{color:"white",fontFamily:"serif",fontWeight:"bold"}}>Get in Touch.</h1>

  <i className="social-icon fab fa-facebook-f"></i>
  <i className="social-icon fab fa-twitter"></i>
  <i className="social-icon fab fa-instagram"></i>
  <i className="social-icon fas fa-envelope"></i>
  <p>©2020 <span className="copyright-brand">freeLancer</span></p>

</div>
</footer>


      </div>
    )
  }
}
export default Home;
