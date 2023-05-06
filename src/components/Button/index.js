import './style.css'
const Button = props => {
    return <>
        {props.to
            ? <a className='btn' target={props.target} style={{
                borderRadius: props.rounded ? '50em' : '0.5em',
                width: props.width ? props.width : 'auto'
            }}
                href={props.to}>
                {props.children}
            </a>
            : <button className='btn' style={{
                borderRadius: props.rounded ? '50em' : '0.5em',
                width: props.width ? props.width : '8em'
            }}
                onClick={props.onClick}>
                {props.children}
            </button>
        }
    </>
}

export default Button