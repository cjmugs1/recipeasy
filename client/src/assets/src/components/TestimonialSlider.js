import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";
import { EffectFade } from "swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      autoplay: false,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      modules: [EffectFade]
    };
    let data = [
      {
        testimonialImage: "1.jpg",
        testimonialName: "Madison Black",
        testimonialDesignation: "Founder",
        testimonialText:
          "Lorem ipsum dolor sit amet, consectetur adipisi elit sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      },
      {
        testimonialImage: "3.jpg",
        testimonialName: "Jonathon Doe",
        testimonialDesignation: "Engineer",
        testimonialText:
          "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet."
      },
      {
        testimonialImage: "2.jpg",
        testimonialName: "John Doe",
        testimonialDesignation: "CEO",
        testimonialText:
          "consectetur adipisi elit sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div className="testimonial-slider__single-slide">
            <div className="author">
              <div className="author__image">
                <img
                  src={`assets/img/testimonial/${val.testimonialImage}`}
                  alt=""
                />
              </div>
              <div className="author__details">
                <h4 className="name">{val.testimonialName}</h4>
                <div className="designation">{val.testimonialDesignation}</div>
              </div>
            </div>
            <div className="content">{val.testimonialText}</div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div
          className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120"
          style={{
            backgroundImage: `url(assets/img/backgrounds/testimonial.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <SwiperSlider options={params}>{DataList}</SwiperSlider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;
