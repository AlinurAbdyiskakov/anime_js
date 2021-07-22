import './App.css';
import Vidio from './components/Vidio/Vidio';
import logo from './imges/logo.png';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './components/Home/Home';

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
        Link to = "/cantacts" > Cantacts < /Link>


        <
        /div>


        <
        Route path = "/"
        component = { Home }
        exact / >
        <
        Route path = "/alo"
        component = { Vidio }
        /> <
        Route path = "/musec"
        component = { Vidio }
        /></div >





    );
}

export default App;