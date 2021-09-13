import React, { useState } from 'react'
import { FormArea, FormContainer, FormHeading, FormLabel, FormInput, InputContainer, SendBtn } from './FormElements'

const Form = () => {
  const [text, setText] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
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
  const sendData = () => {
    console.log(text)
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
        <SendBtn type="submit" value="Enviar" onClick={sendData} />
      </FormContainer>
    </>
  )
}

export default Form
