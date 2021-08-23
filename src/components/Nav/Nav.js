import classes from "./Nav.module.css";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( < ul className = { classes.Nav } >
        <
        select > < /select> <
        NavItem url = "/"
        exact > Home < /NavItem>  <
        NavItem url = "/musec" > Musec < /NavItem>

        <
        NavItem url = "/anime" > Anime < /NavItem>  <
        NavItem url = "/redux" > Interesting sites < /NavItem>   <
        /ul>
    )
}

export default Nav;