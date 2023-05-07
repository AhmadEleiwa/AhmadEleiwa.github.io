import {useState } from "react"
import Button from "../Button"
import SubTitle from "../SubTitle"
import InputFeild from "./InputFeild"
import Row from "./Row"

import './style.css'


const ContactForm = props => {
    const [isSubmit, setIsSubmit]  = useState(false)
    const [formData, setFormData] = useState({
        firstName:'', lastName:'',
        email:'', phone:'',
        address:'',
        message:''

    })

    const formHandler = event => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        setIsSubmit(!isSubmit)
        console.log(formData)
    }

    return <div className="contact-form">

        <SubTitle>GET In Touch</SubTitle>
        <form onSubmit={onSubmitHandler} key={isSubmit}>
            <Row>
                <InputFeild onInput={formHandler} name='firstName' placeholder='First Name' />
                <InputFeild  onInput={formHandler} name='lastName' placeholder='Last Name' />
            </Row>
            <Row>
                <InputFeild  onInput={formHandler} name='email' placeholder='Email' />
                <InputFeild  onInput={formHandler} name='phone' placeholder='Phone' />
            </Row>
            <InputFeild  onInput={formHandler} name='address' placeholder='Address' />
            <InputFeild  onInput={formHandler} name='message' textarea placeholder='Message' />
            <Button rounded>SEND</Button>
        </form>
    </div>
}


export default ContactForm