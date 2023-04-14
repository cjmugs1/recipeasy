import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? document.getElementById("scroll-top").classList.add("show")
      : document.getElementById("scroll-top").classList.remove("show");
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}/home-one`}>
                            <img
                              src="assets/img/logo/logo-light.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="footer-desc">
                          Lorem ipsum dolor sit amet consect adipisici elit, sed
                          do eiusmod tempor incididuk ut labore et dolore magna
                          aliqua Ut enim
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">USEFUL LINKS</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Company News
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Projects</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Careers</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">USEFUL LINKS</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Our Services
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Showcase</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Affliates</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Disclaimer
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">CONTACT US</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                            Your address goes here, street Crossroad123.
                          </p>
                          <ul className="contact-details">
                            <li>
                              <span>P:</span>99 55 66 88 526
                            </li>
                            <li>
                              <span>F:</span>55 44 77 62
                            </li>
                            <li>
                              <span>E:</span>cons@email.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              <p className="copyright-text">
                &copy; Castro {new Date().getFullYear()} Made With <i className="fa fa-heart"></i> By
                HasThemes
              </p>
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button
          className="scroll-top"
          id="scroll-top"
          onClick={this.scrollToTop}
        >
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;
