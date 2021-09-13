import React, { useState } from 'react'
import { FormArea, FormContainer, FormHeading, FormInput, InputContainer, SendBtn } from './FormElements'
import emailjs from 'emailjs-com';

const Form = () => {
  const [text, setText] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('ecoquartz', 'template_85nu3tr', e.target, 'user_H1jEYE2L114QJWfgK6TiV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const handleChange = (e) => {
    console.log(text)
    const input = e.target.id
    switch (input) {
      case 'name':
        setText({ ...text, name: e.target.value })
        break;
      case 'email':
        setText({ ...text, email: e.target.value })
        break;
      case 'area':
        setText({ ...text, message: e.target.value })
        break;
      default:
        break;
    }
  }
  
  return (
    <>
      <FormHeading>
        ¿Necesitas un proyecto personalizado?
        Escribenos.
      </FormHeading>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
        <FormInput type="text" id="name" value={text.name} onChange={handleChange} placeholder='Nombre'/>
        <FormInput type="email" id="email" value={text.email} onChange={handleChange} placeholder='Email'/>
        </InputContainer>
        <FormArea id="area" value={text.message} onChange={handleChange} placeholder='Escribe tu mensaje' />
        <SendBtn type="submit" value="Enviar" onClick={handleSubmit} />
      </FormContainer>
    </>
  )
}

export default Form
