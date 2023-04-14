import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import ProjectItem from './project-item';
import { Slide } from '../swiper';

function ProjectSlider({ projects, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        pagination: { clickable: true, type: 'bullets' },
        spaceBetween: 5,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <SwiperComps settings={settings}>
            {projects.map((project) => (
                <Slide key={project.slug}>
                    <ProjectItem project={project} />
                </Slide>
            ))}
        </SwiperComps>
    );
}

ProjectSlider.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default ProjectSlider;
