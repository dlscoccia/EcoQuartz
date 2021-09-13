import React, { useEffect, useState } from 'react'
import { Button, Controls, Description, ImgContainer, InfoContainer, InfoControlsWrapper, ItemContainer, ItemImage, Name, Price, Quantity } from './ProductItemElements'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'


const ProductItem = ({ data, cart, addToCart, delFromCart }) => {
    const [state, setstate] = useState(0)
    const { id, name, price, image, description } = data
    const item = cart.filter(item => item.id === id)

    useEffect(() => {
        if (item[0]) {
            setstate(item[0].qty)
        } else {
            setstate(0)
        }
    }, [item]);

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
                    <Quantity>{state}</Quantity>
                    <Button disabled Button onClick={() => delFromCart(id)} >
                        <FaMinus />
                    </Button>
                </Controls>
            </InfoControlsWrapper>
        </ItemContainer>
    )
}

export default ProductItem
