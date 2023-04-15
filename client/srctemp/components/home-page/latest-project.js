import PropTypes from 'prop-types';
import Link from 'next/link';
import ProjectSlider from '../projects/projects-slider';

function LatestProject({ projects }) {
    return (
        <div className="project-area md:pt-160 pt-[60px]">
            <div className="container">
                <div className="project-wrap flex justify-between items-center max-sm:flex-col mb-[60px]">
                    <h2 className="lm:text-[42px] lm:leading-[50px] text-[32px] max-sm:mb-[15px]">
                        Latest Projects
                    </h2>
                    <Link href="/projects">
                        <a className="text-[18px] text-secondary uppercase leading-[24px]">
                            All Projects
                        </a>
                    </Link>
                </div>
            </div>
            <ProjectSlider projects={projects} />
        </div>
    );
}

LatestProject.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default LatestProject;
