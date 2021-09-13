import React, { useEffect, useState } from 'react'
import { Button, Controls, Description, ImgContainer, InfoContainer, InfoControlsWrapper, ItemContainer, ItemImage, Name, Price, Quantity } from './ProductItemElements'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'


const ProductItem = ({ data, cart, addToCart, delFromCart }) => {
    // States: qty: handles quantity of item; desable handle delete buttom behavior
    const [qty, setQty] = useState(0)
    const [disable, setDisable] = useState(true)
    
    //Data for each item from props
    const { id, name, price, image, description } = data
    const item = cart.filter(item => item.id === id)
    // Effect that controls the quantity
    useEffect(() => {
        if (item[0]) {
            setQty(item[0].qty)
        } else {
            setQty(0)
        }
    }, [item]);
    // Effect that toggle disabled on delete button
    useEffect(() => {
        if (qty > 0) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [qty]);

    return (
        <ItemContainer >
            <ImgContainer>
                <ItemImage src={image} alt={name} />
            </ImgContainer>
            <InfoControlsWrapper>
                <InfoContainer>
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                </InfoContainer>
                <Controls>
                    <Price>${price}.00</Price>
                    <Button onClick={() => addToCart(id)}>
                        <BiPlusMedical />
                    </Button>
                    <Quantity>{qty}</Quantity>
                    <Button disabled={disable} Button onClick={() => delFromCart(id)} >
                        <FaMinus />
                    </Button>
                </Controls>
            </InfoControlsWrapper>
        </ItemContainer>
    )
}

export default ProductItem
