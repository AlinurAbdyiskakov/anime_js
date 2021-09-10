import React from 'react'
import logo from '../../imges/logo.svg';
import classes from './Logo.module.css'

function Logo() {
    return ( < div className = { classes.Logo } >
        <
        img src = { logo }
        alt = "logo" / >
        <
        h1 > Дөөлөс < /h1> <
        /div>
    )
}

export default Logo