import React from 'react'
import Header from '../../layouts/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layouts/site/Footer/Footer'

const SiteRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SiteRoot