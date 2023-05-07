import './style.css'
const InputFeild = props => {
    return <>
        {props.textarea
            ? <textarea onInput={props.onInput} name={props.name} placeholder={props.placeholder}></textarea>
            : <input  onInput={props.onInput} name={props.name} type={props.type} placeholder={props.placeholder} />
        }
    </>
}

export default InputFeild