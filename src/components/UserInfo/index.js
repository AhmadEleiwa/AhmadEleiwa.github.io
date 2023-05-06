import Typography from "../Typography"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faHandsClapping } from '@fortawesome/free-solid-svg-icons'

import './style.css'
import Button from "../Button"

const UserInfo = props => {
    return <div className="user-info">
        <div className="body">
            <Typography type='title'>Ahmad Ilawa <FontAwesomeIcon icon={faHandsClapping} /></Typography>
            <Typography type='subtitle'>Full-stack Developer</Typography>
            <Typography type='p'>A passionate full-stack developer from palestine  <FontAwesomeIcon icon={faMapPin} /></Typography>
            <Button to='assets/CV.pdf' width='8em' target='_blank'>Open CV</Button>
        </div>
        <img src='assets/profile-image.jpg' alt='ahmad eleiwa' />
    </div>
}

export default UserInfo