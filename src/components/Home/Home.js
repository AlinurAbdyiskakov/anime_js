import React from 'react'
import classes from '../Home/Home.module.css'
import { useState } from 'react'

function Home() {
    const [name, setName] = ('')
    return ( <
        div className = { classes.Home } >
        <
        div class = "margin" > < h1 > Welcome < /h1>  <
        p > My names Alinur < /p></div >
        <
        span > Write problems sait < /span> <
        input type = "text" / >
        <
        button > Push < /button> <
        /div>
    )
}

export default Home