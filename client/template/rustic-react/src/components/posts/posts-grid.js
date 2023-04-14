import PropTypes from 'prop-types';
import PostItem from './post-item';

function PostsGrid({ posts }) {
    return (
        <div className="lg:col-span-8">
            <div className="grid lm:grid-cols-2 gap-x-[25px] gap-y-[55px]">
                {posts.map((posts) => (
                    <PostItem key={posts.slug} posts={posts} />
                ))}
            </div>
        </div>
    );
}

PostsGrid.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default PostsGrid;
