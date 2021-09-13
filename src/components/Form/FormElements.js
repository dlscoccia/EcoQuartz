import styled from "styled-components";

export const FormHeading = styled.h1`
font-family: var(--primary);
font-size: 28px;
text-align: center;
color: var(--dark-blue);
`

export const FormContainer = styled.form`
background-color: var(--blue);
padding: 2rem 0;
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 300px;
font-family: var(--secundary);
`

export const FormInput = styled.input`
background-color: var(--gray);
width: 40%;
padding: 5px;
border: thin solid var(--yellow);


&:focus {
  outline: none;
}

&::placeholder {
  color: var(--dark-gray);
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

&:focus::placeholder {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}
`

export const FormArea = styled.textarea`
background-color: var(--gray);
width: 90%;
border: thin solid var(--yellow);
height: 100px;

&:focus {
  outline: none;
}

&::placeholder {
  color: var(--dark-gray);
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

&:focus::placeholder {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}
`
export const FormLabel = styled.label`
color: var(--dark-blue);
position: relative;
top: 0;
left: 10px;
`

export const InputContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`

export const SendBtn = styled.input`
background-color: var(--gray);
color: var(--dark-blue);
padding: 5px;
width: 150px;
font-size: 18px;
border: thin solid var(--yellow);
transform: scale(1);
  transition: all 0.3s;

&:hover {
  background-color: var(--yellow);
  color: var(--dark-blue);
  transform: scale(1.05);
  transition: all 0.3s;


}
`