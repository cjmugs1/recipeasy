import PropTypes from 'prop-types';
import Link from 'next/link';

function PostPageNavigation(props) {
    const { prevPost, nextPost } = props;
    return (
        <div className="page-navigation pt-[60px]">
            <div className="image-layer relative">
                <div className="grid grid-cols-2 relative text-[18px] leading-6 uppercase font-semibold tracking-[10px] z-[1]">
                    <Link href={`/posts/${prevPost.slug}`}>
                        <a
                            className={`prev py-[50px] mr-[30px] flex justify-center bg-cover bg-no-repeat bg-center relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                                !prevPost?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/posts/${`${prevPost?.slug}/${prevPost?.image}`}')`,
                            }}
                        >
                            Prev
                        </a>
                    </Link>
                    <Link href={`/posts/${nextPost?.slug}`}>
                        <a
                            className={`next py-[50px] flex justify-center bg-cover bg-no-repeat bg-center text-right relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                                !nextPost?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/posts/${`${nextPost?.slug}/${nextPost?.image}`}')`,
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

PostPageNavigation.propTypes = {
    prevPost: PropTypes.instanceOf(Object).isRequired,
    nextPost: PropTypes.instanceOf(Object).isRequired,
};

export default PostPageNavigation;
