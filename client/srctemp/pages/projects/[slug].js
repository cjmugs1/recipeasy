import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';
import HeaderOne from '../../components/header/header-1';
import ProjectContent from '../../components/projects/project-detail/project-content';
import ProjectForm from '../../components/projects/project-form';
import ProjectPageNavigation from '../../components/projects/project-page-navigation';

function ProjectDetailPage(props) {
    const { project, prevProject, nextProject } = props;
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.excerpt} />
            </Head>
            <HeaderOne />
            <ProjectContent project={project} />
            <ProjectForm />
            <ProjectPageNavigation
                project={project}
                prevProject={prevProject}
                nextProject={nextProject}
            />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const project = getItemData(slug, 'projects');
    const projects = getAllItems('projects');
    const currentProjectIndex = projects.findIndex(
        (project) => project.slug === slug
    );
    const nextProject = projects[currentProjectIndex + 1]
        ? projects[currentProjectIndex + 1]
        : {};
    const prevProject = projects[currentProjectIndex - 1]
        ? projects[currentProjectIndex - 1]
        : {};

    return {
        props: {
            project,
            prevProject,
            nextProject,
        },
    };
}

export function getStaticPaths() {
    const projectFilenames = getItemsFiles('projects');

    const slugs = projectFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ProjectDetailPage.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    prevProject: PropTypes.instanceOf(Object).isRequired,
    nextProject: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetailPage;
