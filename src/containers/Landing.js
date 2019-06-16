import React, {Component} from 'react';
import { connect } from 'react-redux';
import {HashLink as Link} from 'react-router-hash-link';
import { appConstant } from '../constants';
import { userActions } from '../actions';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());
        this.state = {
            isNavOpened: false,
        };
    }

    render() {
        return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container">
                  <a class="navbar-brand js-scroll-trigger" href="#page-top">Let's get started</a>
                  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger"
                                          to={appConstant.ROUTE_PATH_SIGNUP}>
                                        Sign Up
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger"
                                          to={appConstant.ROUTE_PATH_LOGIN}>
                                        Login
                        </Link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

                <header class="masthead">
                <div class="container h-100">
                  <div class="row h-100">
                    <div class="col-lg-7 my-auto">
                      <div class="header-content mx-auto">
                        <h1 class="mb-5">Being able to buy anything you want with the touch of a finger may have seemed like a fantasy a few years ago, but it’s now a reality. </h1>
                        <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                      </div>
                    </div>
                    <div class="col-lg-5 my-auto">
                      <div class="device-container">
                        <div class="device-mockup iphone6_plus portrait white">
                          <div class="device">
                            <div class="screen">

                              <img src="img/demo-screen-1.jpg" class="img-fluid" alt="" />
                            </div>
                            <div class="button">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </header>

                <section class="download bg-primary text-center" id="download">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <h2 class="section-heading">Discover what all the buzz is about!</h2>
                    </div>
                  </div>
                </div>
                </section>

                <section class="features" id="features">
                <div class="container">
                  <div class="section-heading text-center">
                    <h2>Unlimited Features, Unlimited Fun</h2>
                    <p class="text-muted">Check out what you can do with this app!</p>
                    <hr/>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 my-auto">
                      <div class="device-container">
                        <div class="device-mockup iphone6_plus portrait white">
                          <div class="device">
                            <div class="screen">

                              <img src="img/demo-screen-1.jpg" class="img-fluid" alt=""/>
                            </div>
                            <div class="button">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-8 my-auto">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="feature-item">
                              <i class="icon-screen-smartphone text-primary"></i>
                              <h3>Device Mockups</h3>
                              <p class="text-muted">Ready to use components, no special tool required!</p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="feature-item">
                              <i class="icon-camera text-primary"></i>
                              <h3>Flexible Use</h3>
                              <p class="text-muted">Put custom requirements according to your choice!</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="feature-item">
                              <i class="icon-present text-primary"></i>
                              <h3>Free to Use</h3>
                              <p class="text-muted">As always, it's trial version is free to use!</p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="feature-item">
                              <i class="icon-lock-open text-primary"></i>
                              <h3>Contribution</h3>
                              <p class="text-muted">We welcome any contribution for this product!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </section>

                <section class="cta">
                <div class="cta-content">
                  <div class="container">
                    <h2>Stop waiting.<br/>Start building.</h2>
                    <a href="#contact" class="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                  </div>
                </div>
                <div class="overlay"></div>
                </section>

                <section class="contact bg-primary" id="contact">
                <div class="container">
                  <h2>We
                    <i class="fas fa-heart"></i>
                    new friends!</h2>
                  <ul class="list-inline list-social">
                    <li class="list-inline-item social-twitter">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item social-facebook">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item social-google-plus">
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                </section>

                <footer>
                <div class="container">
                  <p>&copy; Your Website 2019. All Rights Reserved.</p>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#">Privacy</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Terms</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, null)(Landing)
