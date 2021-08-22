import classes from "./Nav.module.css";
import NavItem from "../NavItem/NavItem";

const Nav = () => {
    return ( < ul className = { classes.Nav } >
        <
        select > < option > < a href = "./http/google.com" > helo < /a></option > < /select> <
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