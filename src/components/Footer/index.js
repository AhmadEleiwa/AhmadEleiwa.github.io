import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Typography from "../Typography"
import './style.css'

const Footer = props => {
    return <footer>
        <div className="contacts">
            <a href="https://github.com/AhmadEleiwa" target="_blank"> <FontAwesomeIcon color="white" fontSize={'2em'} icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/ahmadilawa/" target="_blank"> <FontAwesomeIcon color="white" fontSize={'2em'} icon={faLinkedin} /></a>

        </div>
        <Typography type='p'> © 2023, Designed & Developed By Ahmed Ilawa </Typography>
    </footer>
}

export default Footer