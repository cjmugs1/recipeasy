import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProjectImageGallery extends Component {
    render() {
        return (
            <div>
                {/*====================  project gallery area ====================*/}
                <div className="project-gallery-area section-space--inner--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title-area text-center section-space--bottom--50">
                                    <h2 className="section-title">Latest Projects</h2>
                                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-gallery-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-gallery-project">
                                                <div className="single-gallery-project__image">
                                                    <img src="assets/img/projects/project-13.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-gallery-project__content">
                                                    <h4 className="title">WORK MANAGEMENT</h4>
                                                    <Link to="/project-details">SEE MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-mobile-6">
                                            <div className="single-gallery-project">
                                                <div className="single-gallery-project__image">
                                                    <img src="assets/img/projects/project-14.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-gallery-project__content">
                                                    <h4 className="title">WORK MANAGEMENT</h4>
                                                    <Link to="/project-details">SEE MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-mobile-6">
                                            <div className="single-gallery-project">
                                                <div className="single-gallery-project__image">
                                                    <img src="assets/img/projects/project-15.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-gallery-project__content">
                                                    <h4 className="title">WORK MANAGEMENT</h4>
                                                    <Link to="/project-details">SEE MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-mobile-6">
                                            <div className="single-gallery-project">
                                                <div className="single-gallery-project__image">
                                                    <img src="assets/img/projects/project-16.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-gallery-project__content">
                                                    <h4 className="title">WORK MANAGEMENT</h4>
                                                    <Link to="/project-details">SEE MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-mobile-6">
                                            <div className="single-gallery-project">
                                                <div className="single-gallery-project__image">
                                                    <img src="assets/img/projects/project-17.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-gallery-project__content">
                                                    <h4 className="title">WORK MANAGEMENT</h4>
                                                    <Link to="/project-details">SEE MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-gallery-project">
                                                <div className="single-gallery-project__image">
                                                    <img src="assets/img/projects/project-18.jpg" className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-gallery-project__content">
                                                    <h4 className="title">WORK MANAGEMENT</h4>
                                                    <Link to="/project-details">SEE MORE</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of project gallery area  ====================*/}
            </div>
        )
    }
}

export default ProjectImageGallery;
