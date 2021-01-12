import React from 'react';
import Navbar from "components/Navbar/Navbar";
import {useRouter} from "next/router";
import Footer from "components/Footer/Footer";

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <>
            <Navbar/>

            {children}

            {router.pathname !== '/' && <Footer/>}
        </>
    );
}

export default Layout;
