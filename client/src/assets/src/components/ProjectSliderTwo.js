import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper";

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Responsive breakpoints
            breakpoints: {
                768:{
                    slidesPerView : 2
                },
                992:{
                    slidesPerView : 3
                },

            }

        }
        let data = [
            {img: 'service1.jpg', serviceTitle: 'Land Minning', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', serviceTitle: 'Work Management', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service3.jpg', serviceTitle: 'Material Engineering', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', serviceTitle: 'Power and Energy', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide className="swiper-slide" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </SwiperSlide>
            )
        });
        return(
            <div>
                {/*====================  project grid slider area ====================*/}
                <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h2 className="section-title mb-0">Latest Projects <span className="title-icon" /></h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="service-grid-slider-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-slider">
                            <div className="service-slider__container service-slider__container--style2">
                                <SwiperSlider options={params}>
                                    {DataList}
                                </SwiperSlider>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================  End of project grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;