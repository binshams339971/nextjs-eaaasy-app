import Header from './Header.js';
import Head from 'next/head'
import Footer from './Footer.js';
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Eaasy app Next Js</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;