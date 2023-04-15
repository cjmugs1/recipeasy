import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';
class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){


        return(
            <div>
                {/*====================  header area ====================*/}
                <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header top bar  =======*/}
                    <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            {/* top bar left */}
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-vimeo" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-skype" /></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            {/* top bar right */}
                            <div className="top-bar-right-wrapper">
                                <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--default d-inline-block">GET A QUOTE</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*=======  End of header top bar  =======*/}
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                        <Link to = {`${process.env.PUBLIC_URL}/home-one`}>
                                            <img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Phone</h6>
                                        <p className="header-info-single-item__subtitle">98 9875 5968 54</p>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-home" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Address</h6>
                                        <p className="header-info-single-item__subtitle">your address goes here</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger" onClick={this.activeMobileMenu}>
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/home-one`}> HOME </Link>
                                                <ul className="submenu">
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home-one`}>Homepage One</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home-two`}>Homepage Two</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home-three`}>Homepage Three</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</Link></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/services`}>SERVICE</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/services`}>Service Page</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Service Details Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}>Service Details Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/projects`} >PROJECT</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/projects`} >Project Page</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/project-details`}>Project Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</Link> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
                
                {/* Mobile Menu */}
                <MobileMenu ref={this.mobileMenuElement} />

            </div>
        )
    }
}


export default NavBar;