import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination,
    Thumbs,
    EffectFade,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Thumbs, EffectFade]);

function SwiperComps({ children, sliderCName, settings }) {
    const sliderOptions = {
        ...settings,
    };
    return (
        <Swiper className={`${sliderCName}`} {...sliderOptions}>
            {children}
        </Swiper>
    );
}

export { SwiperSlide as Slide };

SwiperComps.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    settings: PropTypes.shape({
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
    sliderCName: PropTypes.string,
};

export default SwiperComps;
