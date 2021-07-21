import React from 'react'
import classes from '../Vidio/Vidio.module.css'
import vidio from '../../vidio/vidio.mp4'

function Vidio() {
    return ( <
        div className = { classes.Vidio } >
        <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        video src = { vidio }
        controls autoPlay loop > < /video> <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        video src = { vidio }
        controls autoPlay loop > < /video> <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        /div>
    )
}

export default Vidio