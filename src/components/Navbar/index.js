import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    Logo
} from './NavbarElements'
import { FaShoppingCart } from 'react-icons/fa'
import { useLocation } from 'react-router'
import LogoBtn from '../../assets/images/menu-btn.png'

const Navbar = ({ toggle }) => {
    
    const [scrollNav, setScrollNav] = useState(false)
    let location = useLocation();
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <Logo src={LogoBtn} alt='' />
                    </MobileIcon>
                    <NavLogo to='/' onClick={toggleHome}>
                        EcoQuartz
                    </NavLogo>
                    {
                        location.pathname === '/' ?
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>NOSOTROS</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>SERVICIOS</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='products' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>PRODUCTOS</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>CONTACTO</NavLinks>
                                </NavItem>
                            </NavMenu> :
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to='/' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>INICIO</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>PRODUCTOS</NavLinks>
                                </NavItem>
                            </NavMenu>}
                    <NavBtn>
                        <NavBtnLink to='checkout'><FaShoppingCart /></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
