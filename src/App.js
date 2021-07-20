import './App.css';
import Vidio from './components/Vidio/Vidio';
import logo from './imges/logo.png';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';


function App() {
    return ( <
        div className = "App" >
        <
        div class = "Nav" >
        <
        div class = "Toolbar" >
        <
        div class = "Big" > < img src = { logo }
        alt = "logo" / >
        <
        h1 > Musik js < /h1></div >
        <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/alo" > Search < /Link></li >
        <
        li > help < /li> <
        /ul></div >


        <
        /div> <
        Route path = "/"
        component = { Vidio }
        exact / >
        <
        Route path = "/alo"
        component = { Vidio }
        />

        <
        /div>
    );
}

export default App;