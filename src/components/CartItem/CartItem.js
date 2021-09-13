import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus, FaTrashAlt } from 'react-icons/fa'
import { Button, Controls, Discount, ImgContainer, InfoContainer, InfoControlsWrapper, ItemContainer, ItemImage, ItemTotal, ItemUpdate, Name, Price, Quantity, Total } from './CartItemElements'

const CartItem = ({data, delFromCart, addToCart}) => {
    const {name, image, price, qty, id } = data
    let updatedPrice = price
    const getTotal = () => {
        if (qty >= 12) {
            updatedPrice *= 0.9
        }
        return (qty * updatedPrice)
        }
    
    
    const total = getTotal()
    return (
<ItemContainer >
    <ItemUpdate>
            <ImgContainer>
                <ItemImage src={image} alt={name} />
            </ImgContainer>
            <InfoControlsWrapper>
                <InfoContainer>
                    <Name>{name}</Name>
                </InfoContainer>
                <Controls>
                    <Price>${updatedPrice}</Price>
                    <Button onClick={() => addToCart(id)}>
                        <BiPlusMedical />
                    </Button>
                    <Quantity>{qty}</Quantity>
                    <Button Button onClick={() => delFromCart(id)} >
                        <FaMinus />
                    </Button>
                    <Button Button onClick={() => delFromCart(id, true)} >
                        <FaTrashAlt />
                    </Button>                   
                </Controls>
            </InfoControlsWrapper>
            </ItemUpdate>
            {qty >= 12 ? <Discount>Descuento por cantidad (min:12 unidades)</Discount> : <span></span> }
            <ItemTotal>
                <Total>Total del producto: ${total.toFixed(2)}</Total>
            </ItemTotal>
        </ItemContainer>
    )
}

export default CartItem
