import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Slide } from '../swiper';

// Tailwind related stuff
const brandImage = `relative opacity-40 grayscale-[100px] transition duration-500 hover:grayscale-[0] hover:opacity-100`;

function Brand({ brandItems, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: false,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
        },
    };
    return (
        <div className="brand-area bg-azure">
            <div className="container">
                <div className="columns-1 border-[#dfdfdf] border-b md:py-[115px] py-[45px]">
                    <SwiperComps settings={settings}>
                        {brandItems?.map((brandItem) => (
                            <Slide key={brandItem.id}>
                                <div className="brand-item">
                                    <div className={brandImage}>
                                        <Link href="#">
                                            <a>
                                                <Image
                                                    src={brandItem?.clientimage}
                                                    alt={brandItem?.title}
                                                    width={210}
                                                    height={90}
                                                    layout="responsive"
                                                    quality={70}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Slide>
                        ))}
                    </SwiperComps>
                </div>
            </div>
        </div>
    );
}

Brand.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Brand;
