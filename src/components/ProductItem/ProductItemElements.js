import styled from "styled-components";

export const ItemContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 0.5rem;
gap: 1rem;
`
export const ImgContainer = styled.div`
display: flex;
flex: 1;
`

export const ItemImage = styled.img`
width: 140px;
height: auto;
object-fit: contain;
`

export const InfoControlsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
flex: 2;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
`
export const Name = styled.h2`
font-size: 18px;
font-weight: 700;
font-family: var(--primary);
text-align: center;
`
export const Description = styled.p`
font-size: 12px;
font-family: var(--secundary);
margin: 10px 0;
`

export const Controls = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
font-weight: 900;
`

export const Button = styled.button`
background-color: var(--blue);
color: var(--yellow);
width: 35px;
height: 35px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`

export const Quantity = styled.h3`
background-color: var(--blue);
color: var(--yellow);
padding: 0.2rem 0.5rem;
font-size: 20px;
`

export const Price = styled.h3 `
background-color: var(--blue);
color: var(--yellow);
padding: 0.2rem 0.5rem;
font-size: 20px;
` 