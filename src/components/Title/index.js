const Title = props => {
    return <h1 style={{fontSize:'0.9em', color:'var(--light)', letterSpacing:'2px'}}>
        {props.children}
    </h1>
}

export default Title