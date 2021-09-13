import styled from "styled-components";
import { Link } from "react-router-dom";


export const ProductsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
gap: 1rem;
margin-top: 80px;
`

export const Heading = styled.h1`
font-family: var(--primary);
font-size: 40px;
text-align: center;
margin: 15px 0;
`

export const CartLink = styled(Link)`
background-color: var(--blue);
color:var(--yellow);
width: 100px;
padding: 5px 10px;
box-shadow: none;
transition: all 0.5s ease-in-out;
margin: 2rem auto;
text-align: center;
font-family: var(--secundary);

&:hover {
  box-shadow: 3px 3px 0 var(--yellow), -3px -3px 0 var(--dark-gray);
  transition: all 0.5s ease-in-out;
}
`
export const ProductsGrid = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

export const BtnContainer = styled.div`
width: 80%;
margin: 10px auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;

`

export const Button = styled.button`
background-color: var(--blue);
color: var(--yellow);
width: 100px;
padding: 5px 10px;
box-shadow: none;
transition: all 0.5s ease-in-out;

&:hover {
box-shadow: 2px 2px 0 var(--yellow), -2px -2px 0 var(--dark-gray);
transition: all 0.5s ease-in-out;
}
`