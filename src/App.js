import './App.css';
import Vidio from './components/Vidio/Vidio';
import logo from './imges/logo.png';



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
        h1 > Anime js < /h1></div >
        <
        ul >
        <
        li > Home < /li> <
        li > Search < /li> <
        li > help < /li> <
        /ul></div >
        <
        main > < Vidio / > < /main>

        <
        /div>



        <
        /div>
    );
}

export default App;