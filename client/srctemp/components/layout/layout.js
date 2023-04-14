import PropTypes from 'prop-types';
import Footer from './footer';

export * from '../scroll';

function Layout({ children }) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
