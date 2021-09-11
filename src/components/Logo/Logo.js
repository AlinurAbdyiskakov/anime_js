import React from 'react'
import logo from '../../imges/Logo.png';
import classes from './Logo.module.css'

function Logo() {
    return ( < div className = { classes.Logo } >
        <
        img src = { logo }
        alt = "logo" / >

        <
        /div>
    )
}

export default Logo