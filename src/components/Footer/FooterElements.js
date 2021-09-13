import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: var(--gray);
color: var(--dark-blue);
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
font-size: 14px;
padding: 0 0.5rem;
border-top: solid 2px var(--dark-blue);
`

export const TextContainer = styled.div`
padding: 0 5px;
display: flex;
align-items: center;
gap: 10px;
font-family: var(--secundary);
`
export const CopyIcon = styled.span`
font-size: 18px;
`
export const SocialMedia = styled.div`
padding: 0 10px;
color: var(--dark-blue);
font-size: 32px;
`