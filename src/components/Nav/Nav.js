import classes from "./Nav.module.css";
import NavItem from "../NavItem/NavItem";
import moon from "../../imges/moon.svg"
import sun from "../../imges/sun.svg"

const Nav = () => {

    return ( < ul className = { classes.Nav } >

        <
        NavItem url = "/"
        exact > Home < /NavItem>  <
        NavItem url = "/musec" > Song < /NavItem>

        <
        NavItem url = "/anime" > Anime < /NavItem>  <
        NavItem url = "/redux" > Interesting sites < /NavItem>  <
        div className = { classes.con1 } >
        <
        img className = { classes.img1 }
        src = { moon }
        alt = "moon svg" / >
        <
        img className = { classes.img1 }
        src = { sun }
        alt = "sun svg" / > < /div>  <
        /ul>
    )
}

export default Nav;