import React from 'react'

import vidio from '../../vidio/vidio.mp4'

function Vidio() {
    return ( <
        div >
        <
        video src = { vidio }
        controls autoPlay loop > < /video>  <
        /div>
    )
}

export default Vidio