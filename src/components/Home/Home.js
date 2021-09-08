import emailjs from 'emailjs-com';
import React from 'react'
import classes from './Home.module.css'

const Home = () => {
    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_qx4g8d6', 'template_ncuydul', e.target, 'user_0Pk5tbcbJAxlB1kZJgXJk').then(res => {
            console.log(res);
        }).catch(err => { console.log(err); })
    }
    return ( <
        div className = { classes.Home } >

        <
        form className = "row"
        onSubmit = { sendEmail } >
        <
        h1 > The problems < /h1> <
        label > Name < /label> <
        input type = "text"
        name = "name" / >
        <
        label > Email < /label> <
        input type = "email"
        name = "user_email" / >
        <
        label > Massage < /label> <
        textarea name = "message"
        rows = "5" / >
        <
        input type = "submit"
        value = "Send" / >
        <
        /form> <
        /div>
    )
}

export default Home