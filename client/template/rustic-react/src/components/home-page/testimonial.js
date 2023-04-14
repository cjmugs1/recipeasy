import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { Slide } from '../swiper';

function Testimonial({ testimonialItems, testimonialTitle, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: false,
        spaceBetween: 30,
        slidesPerView: 2,
        navigation: {
            prevEl: '.prev-arrow',
            nextEl: '.next-arrow',
        },
        updateOnWindowResize: true,
        loop: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
        },
    };
    return (
        <div className="testimonial-area bg-azure">
            <div className="container">
                <div className="grid-cols-1">
                    <div className="flex items-center justify-between mb-[65px]">
                        <h2 className="testimonial-title">
                            {testimonialTitle}
                        </h2>
                        <div className="swiper-button-wrap flex cursor-pointer text-[#999999] text-[30px]">
                            <div className="swiper-button prev-arrow transition-all hover:text-black mr-[10px]">
                                <AiIcons.AiOutlineLeft />
                            </div>
                            <div className="swiper-button next-arrow transition-all hover:text-black">
                                <AiIcons.AiOutlineRight />
                            </div>
                        </div>
                    </div>
                    <SwiperComps sliderCName="relative" settings={settings}>
                        {testimonialItems?.map((testimonialItem) => {
                            const Icon = FaIcons[testimonialItem?.quote];
                            return (
                                <Slide key={testimonialItem?.id}>
                                    <div className="testimonial-block">
                                        <div className="inner-box relative before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-primary before:transition-all before:duration-500 before:scale-0 before:hover:scale-100">
                                            <div className="quote flex justify-end text-primary text-[30px] leading-[60px] py-[10px]">
                                                <Icon />
                                            </div>
                                            <h2 className="testimonial-author">
                                                {testimonialItem?.authorName}
                                                <span className="occupation">
                                                    {
                                                        testimonialItem?.authorOccupation
                                                    }
                                                </span>
                                            </h2>
                                            <p className="testimonial-feedback">
                                                {testimonialItem?.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </Slide>
                            );
                        })}
                    </SwiperComps>
                </div>
            </div>
        </div>
    );
}

Testimonial.propTypes = {
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialTitle: PropTypes.string,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Testimonial;
