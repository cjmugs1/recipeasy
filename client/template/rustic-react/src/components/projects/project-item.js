import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

function ProjectItem({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    const linkPath = `/projects/${project?.slug}`;

    return (
        <div className={`project-item gallery-item group ${project?.category}`}>
            <Link href={linkPath}>
                <a>
                    <div className="project-img relative before:absolute before:bg-black before:opacity-20 before:w-full before:h-full before:z-[1]">
                        <Image
                            src={imagePath}
                            alt={project?.title}
                            width={472}
                            height={665}
                            layout="responsive"
                            objectFit="cover"
                            quality={60}
                            priority
                        />
                    </div>
                    <div className="project-content">
                        <span className="project-category">
                            {project?.excerpt}
                        </span>
                        <h2 className="project-title">{project?.title}</h2>
                    </div>
                </a>
            </Link>
        </div>
    );
}

ProjectItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectItem;
