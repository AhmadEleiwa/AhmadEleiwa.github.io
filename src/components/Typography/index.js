

const Typography = props => {
    return <>
        {props.type === 'p' && < p style={{color:"var(--text-secondary)",fontSize:props.fontSize ? props.fontSize: '0.9em'}}>
            {props.children}
        </p >}
        {props.type === 'title' && <h1 style={{color:"var(---text-primary)", fontSize:props.fontSize}}>
            {props.children}

        </h1>}
        {props.type === 'subtitle' && <h2 style={{color:"var(--text-secondary-dark)",fontSize:props.fontSize}}>
            {props.children}

        </h2>}
    </>
}

export default Typography