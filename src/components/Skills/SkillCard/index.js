import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const SlillCard = props => {
    return <div className='skill-card'>
        <FontAwesomeIcon icon={props.icon} />

        <p>{props.children}</p>
    </div>
}

export default SlillCard