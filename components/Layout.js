import React from 'react'
import PropTypes from 'prop-types'
import NavButton from './NavButton'
import Footer from './Footer'
import { useRouter } from 'next/router'

function Layout(props) {

    const router = useRouter();

    return (
        <div className="layoutContainer">
            <div className="navbar">
                <NavButton onClick={() => router.push('/')} isClicked={props.navPage === 1} value="Home"/>
                <NavButton onClick={() => router.push('/PostCollector')} isClicked={props.navPage === 2} value="Posts"/>
                <NavButton onClick={() => router.push('/about')} isClicked={props.navPage === 3} value="About"/>
            </div>

            <div className="childContainer">

                {props.children}

                <Footer/>

            </div>
            
        </div>
    )
}

Layout.propTypes = {

    navPage: PropTypes.number,

}

Layout.defaultProps = {

    navPage: 0,

}

export default Layout

