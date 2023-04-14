import Head from 'next/head';
import PropTypes from 'prop-types';
import { getPostCategories } from '../../lib/getPostCategories';
import { getPostTags } from '../../lib/getPostTags';
import { getAllItems } from '../../lib/items-util';
import AllItems from '../../components/posts/all-items';
import HeaderTwo from '../../components/header/header-2';
import Breadcrumb from '../../components/breadcrumb';

function CategoryPostPage({ posts, categories, tags }) {
    return (
        <>
            <Head>
                <title>Posts Category</title>
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
            uniqueCategory: post.category.find((cate) => cate === slug),
        }))
        .filter((post) => post.uniqueCategory === slug);
    const categories = getPostCategories();
    const tags = getPostTags();

    return {
        props: {
            posts: filteredPosts,
            categories,
            tags,
        },
    };
};

export const getStaticPaths = () => {
    const categories = getPostCategories();

    return {
        paths: categories.map((category) => ({
            params: { slug: category },
        })),
        fallback: false,
    };
};
CategoryPostPage.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default CategoryPostPage;
