import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './style.css'
import Button from '../Button'

const Card = props => {
    return <div class="card">
        <img src={props.media} alt={props.title} />
        <div class="card-body">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <Button to={props.path} target="_blank">CODE
                <FontAwesomeIcon icon={faGithub} />
            </Button>
        </div>
    </div>
}

export default Card