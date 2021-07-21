import './App.css';
import Vidio from './components/Vidio/Vidio';
import logo from './imges/logo.png';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
    return ( <
        div className = "App" >
        <
        div className = "Toolbar" >
        <
        img src = { logo }
        alt = "logo" / >
        <
        h1 > Musik js < /h1> <
        Link to = "/" > Home < /Link> <
        Link to = "/about/like" > About < /Link> <
        Link to = "/cantacts" > Cantacts < /Link>


        <
        /div> <
        div className = "Drower" >
        <
        Link to = "/musec" > Musec < /Link> <
        Link to = "/anime" > Anime < /Link> <
        Link to = "/kino" > Kino < /Link>

        <
        /div> <
        div className = "dom" >
        <
        div class = "face" >
        <
        Route path = "/"
        component = { Vidio }
        exact / >
        <
        Route path = "/alo"
        component = { Vidio }
        /> <
        Route path = "/musec"
        component = { Vidio }
        /></div >

        <
        /div>  


        <
        /div>
    );
}

export default App;