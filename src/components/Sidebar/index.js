import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarRoute,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' offset={-80} onClick={toggle}>
                        NOSOTROS
                    </SidebarLink>
                    <SidebarLink to='services' offset={-80} onClick={toggle}>
                        SERVICIOS
                    </SidebarLink>
                    <SidebarLink to='products' offset={-80} onClick={toggle}>
                        PRODUCTOS
                    </SidebarLink>
                    <SidebarLink to='contact' offset={-80} onClick={toggle}>
                        CONTACTO
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/checkout'>
                        <FaShoppingCart />
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
