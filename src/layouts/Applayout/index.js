import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';



export default function Applayout({children}) {
    return <>
            <Header/>
            {children}
            <Footer/>
        </>
}
