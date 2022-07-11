import { NavLink } from "react-router-dom";

function HeaderLink(props) {
    return <NavLink {...props}>{props.children}</NavLink>;
}

export default HeaderLink;
