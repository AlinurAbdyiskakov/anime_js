import emailjs from 'emailjs-com';
import React from 'react'
import classes from './Home.module.css'

const Home=() =>{
  function sendEmail(e){
    e.preventDefault()

    emailjs.sendForm('service_qx4g8d6','template_ncuydul',e.target,'user_0Pk5tbcbJAxlB1kZJgXJk'
    ).then(res=>{
      console.log(res);
    }).catch(err=>{console.log(err);})
  }
  const click=()=>{
    alert("спасибо за помощ   от имени Ali....")
  }
  return (
    <div className={classes.Home}>
     
      <form className="row"  onSubmit={sendEmail}>
         <h1>The problems</h1>
        <label>Name</label>
        <input type="text" name="name"  required validity="hahoho" />
        <label>Email</label>
        <input type="email" name="user_email"  required validity="hahoho"/>
        <label>Message</label>
        <textarea name="message" rows="5" required validity="babynpm start" />
        <input onClick={click} type="submit" className={classes.Button} value="Send" />
      </form>
    </div>
  )
}

export default Home
