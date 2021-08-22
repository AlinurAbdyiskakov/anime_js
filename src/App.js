import './App.css';
import Vidio from './components/Vidio/Vidio';

import { Route } from 'react-router';

import Home from './components/Home/Home';
import Anime from './components/Anime/Anime';
import Redux_1 from './components/Redux_1/Redux_1';

import Layout from './components/Layout/Layout'



function App() {
    return ( < div className = "App" >
        <
        div className = "Toolbar" >

        <
        Layout / >
        <
        /div>


        <
        Route path = "/"
        component = { Home }
        exact / >
        <
        Route path = "/musec"
        component = { Vidio }
        />   <
        Route path = "/anime"
        component = { Anime }
        />  <
        Route path = "/redux"
        component = { Redux_1 }
        /> </div >





    );
}

export default App;