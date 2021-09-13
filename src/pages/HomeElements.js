import styled from "styled-components";
import {Link} from 'react-router-dom'
export const SectionHome = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({bgDark}) => bgDark ? 'var(--gray)' : '#ffffff'};
`

export const Heading = styled.h2`
font-family: var(--primary);
font-size: 24px;
padding: 1.5rem 0 1rem 0;
color: ${({about}) => about ? 'var(--yellow)' : 'var(--dark-blue)'};
text-align: center;

@media screen and (min-width: 768px) {
  font-size: 28px;
  padding: 0 1rem;
}

@media screen and (min-width: 1024px) {
  font-size: 32px;
  padding: 0 1.5rem;
}
`

export const Subtitle = styled.p`
text-align: center;
font-size: 18px;
font-family: var(--secundary);
margin-bottom: 0.8rem;
color: ${({about}) => about ? 'var(--gray)' : '#333333'};
padding: 0 5px;

@media screen and (min-width: 1024px) {
  font-size: 20px;
  padding: 0 1rem;
}
`
export const Text = styled.p`
text-align: center;
font-size: 14px;
font-family: var(--secundary);
color: ${({about}) => about ? 'var(--dark-gray)' : '#333333'};
font-weight: 300;
padding: 0 5px 1.5rem 0;

@media screen and (min-width: 768px) {
  font-size: 16px;
}
@media screen and (min-width: 1024px) {
  padding: 0 1rem;
}
`
export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;

@media screen and (min-width: 1024px){
  flex-direction: row;
}
`

export const AboutContent = styled.div`
@media screen and (min-width: 1024px) {
  display: flex;
}
`

export const AboutInfo = styled.div`
width: 100%;
height: 100%;
background-color: var(--dark-blue);

@media screen and (min-width: 1024px) {
  width: 50%;
}
`

export const AboutImgContainer = styled.div`
background-color: var(--grey);
display: flex;
align-items: center;
width: 100%;

@media screen and (min-width: 1024px) {
  width: 50%;
}
`

export const AboutiImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

@media screen and (min-width: 1024px) {
  height: 80%;
}
`

export const ServicesContainer = styled.div`
margin: 2rem 0;
display: flex;
flex-direction: column;
gap: 1.5rem;
justify-content: space-between;
align-items: center;

@media screen and (min-width: 1024px) {
  flex-direction: row;
  padding: 3rem;
}
`

export const ServicesArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: center;
`

export const IconContainer = styled.div`
font-size: 60px;
`

export const ProductsContainer = styled.div`
margin: 2rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ProductsGrid = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
padding: 10px;
gap: 1.5rem;
justify-content: space-around;
align-items: center;
`

export const ProductWrapper = styled.div`
display: flex;
flex-direction: ${({reverse}) => reverse ? 'row-reverse': 'row'};
gap: 1rem;
margin: 0.5rem 0;

@media screen and (max-width: 768px){
  &:nth-child(1) {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  font-size: 24px;
  margin-bottom: 0.5rem;
  flex-direction: row;
  width: 40%;
  margin: 2rem;
}
`

export const ProductImage = styled.img`
width:50%;`

export const ProductInfo = styled.div`
text-align:center;
`

export const ProductName = styled.h3`
font-size: 18px;
font-family: var(--primary);
color: var(--blue);

@media screen and (min-width: 768px) {
  font-size: 24px;
  margin-bottom: 0.5rem;
}

@media screen and (min-width: 1024px) {
  font-size: 36px;
  margin-bottom: 0.5rem;
}
`
export const ProductText = styled.p`
font-size: 14px;
font-weight: 300;
font-family: var(--secundary);

@media screen and (min-width: 768px) {
  font-size: 18px;
}

@media screen and (min-width: 1024px) {
  font-size: 20px;
  margin-bottom: 0.5rem;
}
`

export const Btn = styled(Link)`
background-color: var(--blue);
color: var(--yellow);
padding: 5px 15px;
box-shadow: none;
transition: all 0.5s ease-in-out;
font-size: 20px;
font-family: var(--primary);
margin: 1rem 0;
width: min-content;

&:hover {
box-shadow: 2px 2px 0 var(--yellow), -2px -2px 0 var(--dark-gray);
transition: all 0.5s ease-in-out;
}

@media screen and (min-width: 768px) {
  font-size: 24px;
}

@media screen and (min-width: 1024px) {
  font-size: 32px;

  &:hover {
box-shadow: 4px 4px 0 var(--yellow), -4px -4px 0 var(--dark-gray);
}
}
`

export const ContactContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 0 3rem 0;
align-items: center;
width: 100%;

@media screen and (min-width: 1024px) {
  flex-direction: row;
}
`

export const ContactInfo = styled.div`
margin-bottom: 1.5rem;
text-align: center;

@media screen and (min-width: 1024px) {
  width: 45%;
}
`

export const ContactMap = styled.div`
width: 90%;
height: 200px;
border: solid 2px var(--dark-gray);

@media screen and (min-width: 768px) {
  height: 250px;
}

@media screen and (min-width: 1024px) {
  height: 350px;
  width: 45%;
}
`

export const Map = styled.iframe`
width: 100%;
height: 100%;
padding: 1px;

`

export const InfoList = styled.ul`
margin: 0 auto 1rem auto;
width: 80%;
`

export const InfoItem = styled.li`
margin: 0.5rem 0;
font-family: var(--secundary);

@media screen and (min-width: 1024px) {
  font-size: 20px;
}
`