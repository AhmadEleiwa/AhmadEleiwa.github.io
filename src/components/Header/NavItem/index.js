import './style.css'
const NavItem = props => {
    return <li className="nav-item"><a href={props.to}>{props.children}</a></li>
}

export default NavItem