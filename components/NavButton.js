import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function NavButton(props) {



    return (
        <>
            <button
            className={props.isClicked ? "navButton navButtonClicked" : "navButton navButtonNotClicked"}
            onClick={() => { props.onClick();}}
            >{props.value}</button>
        </>
    )
}

NavButton.propTypes = {

    value: PropTypes.string,
    onClick: PropTypes.func,
    isClicked: PropTypes.bool,
}

NavButton.defaultProps = {

    value: "Click",
    onClick: () => console.log(`Default __Click`),
    isClicked: false,


}

export default NavButton

