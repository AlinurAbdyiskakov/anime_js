import React from 'react'
import classes from '../Vidio/Vidio.module.css'
import vidio from '../../vidio/vidio.mp4'
import vidio2 from '../../vidio/vidio2.mp4'
import vidio3 from '../../vidio/vidio3.mp4'
import vidio4 from '../../vidio/vidio4.mp4'
import vidio5 from '../../vidio/vidio5.mp4'
import vidio6 from '../../vidio/vidio6.mp4'
import vidio7 from '../../vidio/vidio7.mp4'
import vidio8 from '../../vidio/vidio8.mp4'

function Vidio() {
    return ( < div className = { classes.Vidio } >
        <
        video src = { vidio }
        controls loop > < /video> 



        <
        video src = { vidio2 }
        controls loop > < /video>   <
        video src = { vidio3 }
        controls loop > < /video>   <
        video src = { vidio4 }
        controls loop > < /video>  <
        video src = { vidio5 }
        controls loop > < /video>  <
        video src = { vidio6 }
        controls loop > < /video>  <
        video src = { vidio7 }
        controls loop > < /video>  <
        video src = { vidio8 }
        controls loop > < /video>  <
        /div>
    )
}

export default Vidio