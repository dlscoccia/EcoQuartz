import React, { useContext } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { CartContext } from '../../App'
import { Button, Controls, ImgContainer, InfoContainer, InfoControlsWrapper, ItemContainer, ItemImage, Name, Price, Quantity } from './CartItemElements'

const CartItem = ({data, delFromCart}) => {
    console.log(data)
    const {name, image, price, qty } = data
    return (
<ItemContainer >
            <ImgContainer>
                <ItemImage src={image} alt={name} />
            </ImgContainer>
            <InfoControlsWrapper>
                <InfoContainer>
                    <Name>{name}</Name>
                </InfoContainer>
                <Controls>
                    <Price>${price}.00</Price>
                    <Quantity>{qty}</Quantity>                    
                </Controls>
            </InfoControlsWrapper>
        </ItemContainer>
    )
}

export default CartItem
