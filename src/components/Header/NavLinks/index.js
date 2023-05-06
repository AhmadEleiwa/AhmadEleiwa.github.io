import NavItem from "../NavItem"

const dataLinks = [
    {value:"HOME", to:'#'},
    {value:"ABOUT", to:'#'},
    {value:"SKILLS", to:'#'},
    {value:"PROJECTS", to:'#'},
    {value:"CONTACTS", to:'#'},

]
const NavLinks = props => {

    return <nav>
        <ul>
           {dataLinks.map(item => <NavItem to={item.to}>{item.value}</NavItem>)}
        </ul>
    </nav>
}

export default NavLinks