// import React from 'react'
// import classes from '../Home/Home.module.css'
// import axios from '../axios';
// function Home() {
//     function CancelCallback() {

//       }

//       function SubmitCallback(event) {
//         const data = new FormData(event.target);

//         axios.post('/users.json', {
//           name: data.get('name'),
//           problems:data.get('problems'),
//         }).then(response => {

//         });

//         event.preventDefault();
//       }

//     return ( <div className = { classes.Home } >
//         <div class = "margin">
//         <h1 className = { classes.h1 } > Error </h1> 
//         <h1 > Welcome </h1>
//           <p> My names Alinur </p>
//            </div> 
//            <span > Write problems sait </span> 
//          <form onSubmit={SubmitCallback}> 
//              <label>Name</label>
//              <input type="text" id="name" name="name" required/>
//              <label>Problams write please</label>
//              <input type="text" required id="problems" name="prolams"/>
//              <button>Push</button>
//              <button onClick={CancelCallback}>Cancel</button>
//          </form>
//          </div>
//     )
// }

// export default Home;
import React from 'react'
import classes from '../Home/Home.module.css'
import { useState } from 'react';

function Home() {
    const [value, setValue] = useState('')
    const onClick = (event) => {
        value(value.event.target.value)
    }
    return ( < div className = { classes.Home } >
        <
        div class = "margin" >
        <
        h1 className = { classes.h1 } > Error < /h1> <
        h1 > Welcome < /h1>  <
        p > My names Alinur < /p> <
        /div> <span > Write problems sait: {value}</span >
        <
        input type = "text"
        value = { setValue }
        /> <
        button onClick = { onClick } > Push < /button> </div >
    )
}

export default Home;