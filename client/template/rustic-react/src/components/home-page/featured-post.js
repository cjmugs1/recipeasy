import Link from 'next/link';
import PropTypes from 'prop-types';
import PostSlider from '../posts/post-slider';

function FeaturedPost({ posts }) {
    return (
        <div className="post-area bg-azure md:pt-[160px] pt-[55px] md:pb-[155px] pb-[55px]">
            <div className="container">
                <div className="post-wrap flex items-center justify-between mb-[60px]">
                    <h2 className="lm:text-[42px] lm:leading-[50px] text-[32px]">
                        Editorials
                    </h2>
                    <Link href="/posts">
                        <a className="lm:text-[18px] text-[16px] text-secondary uppercase leading-[24px]">
                            All articles
                        </a>
                    </Link>
                </div>
                <PostSlider posts={posts} />
            </div>
        </div>
    );
}

FeaturedPost.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default FeaturedPost;
