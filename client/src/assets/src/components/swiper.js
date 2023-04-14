import { forwardRef } from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSlider = forwardRef(
    (
        {
            options,
            children,
            navClass,
        },
        ref
    ) => {
        const modules = options?.modules !== undefined ? options.modules : [];
        const prevClass = `prev-${navClass || "swiper-nav"}`;
        const nextClass = `next-${navClass || "swiper-nav"}`;
        const sliderOptions = {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            autoplay: {
                delay: 5500,
                disableOnInteraction: true,
            },
            watchSlidesProgress: true,
            autoHeight: true,
            breakpoints: {},
            ...options,
            modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
            navigation: options?.navigation
                ? {
                      prevEl: `.${prevClass}`,
                      nextEl: `.${nextClass}`,
                  }
                : false,
            pagination: options?.pagination
                ? {
                      clickable: true,
                  }
                : false,
        };

        return (
            <div
                className="swiper-wrap"
                ref={ref}
            >
                <Swiper {...sliderOptions}>{children}</Swiper>

                {sliderOptions?.navigation && (
                    <>
                        <button
                            type="button"
                            className={`ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block ${prevClass}`}
                        >
                            <i className="ion-ios-arrow-forward" />
                        </button>
                        <button
                            type="button"
                            className={`ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block ${nextClass}`}
                        >
                            <i className="ion-ios-arrow-left" />
                        </button>
                    </>
                )}
            </div>
        );
    }
);

export { SwiperSlide };

export default SwiperSlider;