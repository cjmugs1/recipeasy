import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { OffcanvasData } from './offcanvas-data';
import WhiteLogo from './white-logo';

function HeaderOne() {
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;

        scrollTop >= 90
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    //   End Here

    const router = useRouter();
    const headerCss = `flex lg:justify-between justify-end items-center`;
    return (
        <>
            <header className="absolute w-full z-10">
                <div
                    className="sticky-holder header-section sticky-style-1"
                    ref={header}
                >
                    <div className="custom-container container">
                        <div className="grid grid-cols-12 items-center leading-[120px]">
                            <div className="lg:col-span-2 col-span-6">
                                <WhiteLogo />
                            </div>
                            <div className="lg:col-span-7 lg:block hidden">
                                <nav>
                                    <ul className="main-menu text-white">
                                        <li
                                            className={
                                                router.pathname === '/'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/">
                                                <a>
                                                    <span>Home</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/about'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/about">
                                                <a>
                                                    <span>About</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/projects'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/projects">
                                                <a>
                                                    <span>Projects</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/posts'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/posts">
                                                <a>
                                                    <span>Posts</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/contact'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/contact">
                                                <a>
                                                    <span>Contact</span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="lg:col-span-3 col-span-6">
                                <div className={`outer-box ${headerCss}`}>
                                    <ul className="language-list text-white">
                                        <li>
                                            <Link href="/">END</Link>
                                        </li>
                                        <li>
                                            <Link href="/">FRA</Link>
                                        </li>
                                    </ul>
                                    <div className="offcanvas-area">
                                        <div className="offcanvas">
                                            <button
                                                type="button"
                                                className="menu-bars flex text-white text-[24px]"
                                                aria-label="Right Align"
                                            >
                                                <FaBars
                                                    onClick={showOffcanvas}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="offcanvas-menu-holder" onClick={showOffcanvas}>
                <div
                    className={
                        offcanvas
                            ? 'offcanvas-menu-wrap active'
                            : 'offcanvas-menu-wrap'
                    }
                >
                    <nav
                        className="offcanvas-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="offcanvas-menu-items">
                            <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                                <div className="logo" onClick={showOffcanvas}>
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src="/images/logo/logo-2.png"
                                                alt="Logo"
                                                width={70}
                                                height={70}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <button
                                    type="button"
                                    className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                                    aria-label="Right Align"
                                >
                                    <AiOutlineClose onClick={showOffcanvas} />
                                </button>
                            </li>
                            {OffcanvasData.map((item) => (
                                <li key={item.id} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>
                                            <span onClick={showOffcanvas}>
                                                {item.title}
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default HeaderOne;
