//  import React from 'react'
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
// import React from 'react'
// import classes from '../Home/Home.module.css'
// import { useState ,useEffect} from 'react';
// import axios from 'axios';
// function Home() {
//     const [value, setValue] = useState('')
//     const onClick = (event) => {
//         value=(event.target.value)
//     }

//     return ( <div className = { classes.Home } >
//         <div class = "margin" >
//         <h1 className = { classes.h1 } > Error </h1> 
//         <h1 > Welcome </h1> 
//          <p> My names Alinur </p>
//           </div> <span > Write problems sait: {value}</span >
//         <input type = "text"
//         value = { setValue }onChange = { onClick  } /> 
//         <button > Push </button> 
//         </div >
//     )
// }

// export default Home;


import { useState } from "react";
import axios from "axios";

function Home() {
    function formSubmitCallback(event) {
        const data = new FormData(event.target);
        const user = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            gender: data.get('gender'),
            firstName: data.get('email'),
            firstName: data.get('phone'),
            // ...
        }
        console.log(user);
        // event.preventDefault();


        axios.post("https://form-example-c288a-default-rtdb.firebaseio.com/default.json", {
            user
        })
        event.preventDefault();
    }


    return ( <
        form className = "App"
        onSubmit = { formSubmitCallback } >
        <
        div >
        <
        label
        for = "firstName" > First name < /label> <
        input type = "text"
        name = "firstName"
        id = "firstName"
        required / >
        <
        span className = "error" > First name is required < /span> <
        /div> <
        div >
        <
        label
        for = "lastName" > Last name < /label> <
        input type = "text"
        name = "lastName"
        id = "lastName"
        required / >
        <
        span className = "error" > Last name is required < /span> <
        /div> <
        div >
        <
        label
        for = "email" > Email < /label> <
        input type = "email"
        name = "email"
        id = "email" / >
        <
        span className = "error" > Email is required < /span> <
        /div> <
        div >
        <
        label
        for = "phone" > Phone < /label> <
        input type = "tel"
        name = "phone"
        id = "phone"
        minlength = "10"
        maxlength = "10"
        required / >
        <
        span className = "error" > Phone is required < /span> <
        /div> <
        div >
        <
        label
        for = "dateOfBirth" > Date of birth < /label> <
        input type = "date"
        name = "dateOfBirth"
        id = "dateOfBirth"
        required / >
        <
        span className = "error" > Date Of Birth is required < /span> <
        /div> <
        div >
        <
        label
        for = "gender" > Gender < /label> <
        select name = "gender"
        required id = "gender" >
        <
        option value = "" > -Select - < /option> <
        option value = "male" > Male < /option> <
        option value = "female" > Female < /option> <
        /select>




        <
        /div>

        <
        div >
        <
        button > Submit < /button> <
        /div> <
        /form>
    );
}
export default Home;