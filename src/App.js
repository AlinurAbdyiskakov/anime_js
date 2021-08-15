import './App.css';
import Vidio from './components/Vidio/Vidio';
import logo from './imges/logo.png';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Anime from './components/Anime/Anime';
import Redux_1 from './components/Redux_1/Redux_1';

;



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
        Link to = "/musec" > Musec < /Link> <
        Link to = "/anime" > Anime < /Link> <
        Link to = "/redux" > Interesting sites < /Link>


        <
        /div>


        <
        Route path = "/"
        component = { Home }
        exact / >
        <
        Route path = "/musec"
        component = { Vidio }
        /> <
        Route path = "/anime"
        component = { Anime }
        /> <
        Route path = "/redux"
        component = { Redux_1 }
        />


        <
        /div>





    );
}

export default App;