import styled from "styled-components";
import { Link } from "react-router-dom";


export const CartContainer = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 80px;
`

export const LinksContainer = styled.div`
display: flex;
gap: 3rem;
`

export const EmptyCart = styled.h1`
font-family: var(--secundary);
font-size: 24px;
text-align: center;
`

export const TotalContainer = styled.div`
display: flex;
gap: 1rem;
font-family: var(--primary);
font-size: 24px;
justify-content: center;
margin-top: 1rem;
color: var(--blue);
`

export const CartItems = styled.div`

`

export const LinkR = styled(Link)`
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


export const LinkW = styled.a`
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