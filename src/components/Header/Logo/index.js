import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Logo = props => {
    return <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '0.2em' }}>
        <FontAwesomeIcon icon={faCode} fontSize={'1.2em'} />
        <h1 style={{fontSize:'1.2em'}}>  AhmadIlawa </h1>
    </div>
}

export default Logo