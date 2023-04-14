import React, {Component} from 'react';
import { EffectFade } from "swiper";
import SwiperSlider, { SwiperSlide } from "./swiper";

class HeroSliderTwo extends Component{
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            effect: 'fade',
            navigation: true,
            autoplay: {
                delay: 5000,
            },
            modules: [EffectFade]
        }

        let data = [
            {bgImg: 'slider3.jpg', sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
            {bgImg: 'slider2.jpg', sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
            {bgImg: 'slider1.jpg', sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}>
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content m-auto text-center">
                                    <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                    <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                    <a className="hero-slider__btn hero-slider__btn--style2" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> GET START</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <SwiperSlider options={params}>
                        {DataList}
                    </SwiperSlider>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderTwo;