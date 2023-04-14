import React, { Component } from 'react';

class FeatureIconText extends Component {
    render() {

        let data = [
            {featureIcon: "feature-4.png", featureTitle: "Land Mining", featureDescription: "Lorem ipsum dolor sit consect adipisicing elit, sed do eiusmo tempor incididu."},
            {featureIcon: "feature-5.png", featureTitle: "Work Management", featureDescription: "Lorem ipsum dolor sit consect adipisicing elit, sed do eiusmo tempor incididu."},
            {featureIcon: "feature-6.png", featureTitle: "Material Engineering", featureDescription: "Lorem ipsum dolor sit consect adipisicing elit, sed do eiusmo tempor incididu."},
            {featureIcon: "feature-7.png", featureTitle: "Power & Energy", featureDescription: "Lorem ipsum dolor sit consect adipisicing elit, sed do eiusmo tempor incididu."}
        ];

        let Datalist = data.map((val, i)=>{
            return(
         
                <div className="col-lg-3 col-md-6" key={i}>
                    <div className="single-feature-icon">
                        <div className="single-feature-icon__image">
                            <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                        </div>
                        <h3 className="single-feature-icon__title">{val.featureTitle}</h3>
                        <p className="single-feature-icon__content">{val.featureDescription}</p>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/*====================  feature icon area ====================*/}
                <div className="feature-icon-area section-space--inner--120">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-icon-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of feature icon area  ====================*/}
            </div>
        )
    }
}

export default FeatureIconText;
