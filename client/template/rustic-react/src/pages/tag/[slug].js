import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems } from '../../lib/items-util';
import HeaderTwo from '../../components/header/header-2';
import Breadcrumb from '../../components/breadcrumb';
import AllItems from '../../components/posts/all-items';
import { getPostTags } from '../../lib/getPostTags';
import { getPostCategories } from '../../lib/getPostCategories';

function popularTagPage({ posts, tags, categories }) {
    return (
        <>
            <Head>
                <title>Popular Tags</title>
                <meta name="description" content="Rustic posts!" />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Posts" pageTitle="Our Posts" />
            <AllItems posts={posts} categories={categories} tags={tags} />
        </>
    );
}

export const getStaticProps = ({ params }) => {
    const { slug } = params;
    const posts = getAllItems('posts');
    const filteredPosts = posts
        .map((post) => ({
            ...post,
            uniqueTag: post.postTags.find((tag) => tag === slug),
        }))
        .filter((post) => post.uniqueTag === slug);
    const tags = getPostTags();
    const categories = getPostCategories();

    return {
        props: {
            posts: filteredPosts,
            tags,
            categories,
        },
    };
};

export const getStaticPaths = () => {
    const tags = getPostTags();

    return {
        paths: tags.map((tag) => ({
            params: { slug: tag },
        })),
        fallback: false,
    };
};

popularTagPage.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
};

export default popularTagPage;
