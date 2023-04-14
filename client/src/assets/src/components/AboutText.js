import React, { Component } from 'react';

class AboutText extends Component{

    render(){
        return(
            <div>
                {/*====================  about text area ====================*/}
                <div className="about-text-area grey-bg section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="video-cta-content">
                                <h4 className="video-cta-content__small-title">ABOUT US</h4>
                                <h3 className="video-cta-content__title">We are Best construction in the world</h3>
                                <p className="video-cta-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">CONTACT US</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cta-video-image__image">
                                    <img src="assets/img/backgrounds/about.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                {/*====================  End of about text area  ====================*/}
            </div>
        )
    }
}


export default AboutText;