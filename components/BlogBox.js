import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

function BlogBox(props) {

    const [clicked,setClicked] = useState(false)

    return (
        <div className={clicked ? "blogBoxContainer blogisClicked" : "blogBoxContainer"} onClick={props.onClick}>
            <div className="blogBoxHeader">
                <div>{props.title}</div>
                <div className="blogBoxDate">{props.date}</div>
            </div>

            <div className="blogBoxDesc">
                {props.desc}
            </div>
        </div>
    )
}

BlogBox.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string,
    onClick: PropTypes.func,
}


export default BlogBox

