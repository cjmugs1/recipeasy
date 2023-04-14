import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';
import { getPostCategories } from '../../lib/getPostCategories';
import { getPostTags } from '../../lib/getPostTags';
import HeaderOne from '../../components/header/header-1';
import PostContent from '../../components/posts/post-detail/post-content';
import DisqusForm from '../../components/posts/disqus-form';
import PostPageNavigation from '../../components/posts/post-page-navigation';

function PostDetailPage(props) {
    const { post, tags, categories, prevPost, nextPost } = props;
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <HeaderOne />
            <PostContent post={post} categories={categories} tags={tags} />
            <DisqusForm />
            <PostPageNavigation prevPost={prevPost} nextPost={nextPost} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const post = getItemData(slug, 'posts');
    const posts = getAllItems('posts');
    const categories = getPostCategories();
    const tags = getPostTags();
    const currentPostIndex = posts.findIndex((post) => post.slug === slug);
    const nextPost = posts[currentPostIndex + 1]
        ? posts[currentPostIndex + 1]
        : {};
    const prevPost = posts[currentPostIndex - 1]
        ? posts[currentPostIndex - 1]
        : {};

    return {
        props: {
            post,
            tags,
            categories,
            prevPost,
            nextPost,
        },
    };
}

export function getStaticPaths() {
    const postFilenames = getItemsFiles('posts');

    const slugs = postFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

PostDetailPage.propTypes = {
    post: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    prevPost: PropTypes.instanceOf(Object).isRequired,
    nextPost: PropTypes.instanceOf(Object).isRequired,
};

export default PostDetailPage;
