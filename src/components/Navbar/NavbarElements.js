import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#C6C6C6' : '#C6C6C695')};
color: ${({scrollNav}) => (scrollNav ? 'var(--dark-blue)' : '#000000')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
border-bottom: 2px solid var(--dark-blue);

@media screen and (max-width: 960px) {
    transition: all 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
color: var(--dark-blue);
font-family: var(--primary);

@media screen and (max-width: 768px) {
    width: 100%;
}
`

export const MobileIcon = styled.div`
    display: none;
    position: absolute;
    top: 20px;
    left: 20px;
    align-self: center;
    font-size: 1.8rem;
    cursor: pointer;


    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const Logo = styled.img`
width: 40px;
height: auto;
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:active {
    border-bottom: 3px solid var(--blue);
}

&:hover {
    color: var(--blue);
}
`

export const NavBtn = styled.nav `
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
white-space: nowrap;
padding: 10px 22px;
color: var(--dark-blue);
font-size: 32px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
transform: scale(1);


&:hover {
transition: all 0.2s ease-in-out;
color: var(--yellow);
transform: scale(1.2);
}
`