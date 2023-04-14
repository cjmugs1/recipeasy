import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoMdGrid } from 'react-icons/io';
import ProjectBanner from './project-banner';

function ProjectContent({ project }) {
    const imagePath = `/images/projects/${project.slug}/${project.image}`;

    return (
        <article>
            <ProjectBanner
                title={project.title}
                excerpt={project.excerpt}
                categoryName={project.categoryName}
                image={imagePath}
            />
            <div className="project-upper-box md:pt-[150px] pt-[55px]">
                <div className="container">
                    <div className="navigation pb-[50px]">
                        <Link href="/projects">
                            <a className="flex items-center text-[14px] leading-6 uppercase">
                                <IoMdGrid className="text-[20px] mr-5" />
                                Back to Projects
                            </a>
                        </Link>
                    </div>
                    <ul className="info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3">
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Location:
                            </span>
                            {project?.location}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Client:
                            </span>
                            {project?.clientName}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Completed:
                            </span>
                            {project.completedDate}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Architect:
                            </span>
                            {project.architectName}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Area:
                            </span>
                            {project.squareUnits}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project-description md:pt-[80px] pt-[40px]">
                <div className="container">
                    <div className="content">
                        <h2 className="text-[36px] leading-[58px] pb-10">
                            Description
                        </h2>
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.additionDesc,
                            }}
                        />
                    </div>
                    <div className="image md:pt-[85px] pt-[50px]">
                        <Image
                            src={`/images/projects/${project.slug}/${project.descriptionImg}`}
                            alt={project.alt}
                            width={1170}
                            height={610}
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectContent;
