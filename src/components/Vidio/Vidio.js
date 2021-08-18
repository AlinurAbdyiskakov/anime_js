import React from 'react'
import  classes  from '../Vidio/Vidio.module.css'
import vidio from '../../vidio/vidio.mp4'
import vidio2 from '../../vidio/vidio2.mp4'
import vidio3 from '../../vidio/vidio3.mp4'
// import mp4 from'./https://youtu.be/gnNvrq977B8'
function Vidio() {
    return (
        <div className={classes.Vidio}>
        <video src={vidio} controls  loop></video> 
        {/* <video src={mp4} controls autoPlay loop></video>  */}
        <video src={vidio} controls  loop></video> 
        <video src={vidio2} controls loop></video>
        <video src={vidio2} controls loop></video> 
        <video src={vidio3} controls loop></video> 
        <video src={vidio} controls loop></video>
        <video src={vidio} controls loop></video> 
        </div>
    )
}

export default Vidio
