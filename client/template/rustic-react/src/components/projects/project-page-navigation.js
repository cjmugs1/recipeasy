import PropTypes from 'prop-types';
import Link from 'next/link';

function ProjectPageNavigation(props) {
    const { prevProject, nextProject } = props;
    return (
        <div className="page-navigation">
            <div className="image-layer relative">
                <div className="grid grid-cols-2 relative text-[18px] leading-6 uppercase font-semibold tracking-[10px] z-[1]">
                    <Link href={`/projects/${prevProject.slug}`}>
                        <a
                            className={`prev py-[50px] mr-[30px] flex justify-center bg-cover bg-no-repeat bg-center relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                                !prevProject?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/projects/${`${prevProject?.slug}/${prevProject?.image}`}')`,
                            }}
                        >
                            Prev
                        </a>
                    </Link>
                    <Link href={`/projects/${nextProject?.slug}`}>
                        <a
                            className={`next py-[50px] flex justify-center bg-cover bg-no-repeat bg-center text-right relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                                !nextProject?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/projects/${`${nextProject?.slug}/${nextProject?.image}`}')`,
                            }}
                        >
                            Next
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

ProjectPageNavigation.propTypes = {
    prevProject: PropTypes.instanceOf(Object).isRequired,
    nextProject: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectPageNavigation;
