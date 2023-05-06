const NavItem = props => {
    return <li><a href={props.to}>{props.children}</a></li>
}

export default NavItem