import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../App'
import whatsAppMessage from '../../utils/ws'
import { CartContainer, CartItems, EmptyCart, LinkR, LinksContainer, LinkW, TotalContainer } from './ShoppingCartElements'


const ShoppingCart = () => {
    const { cartState, delFromCart, addToCart, } = useContext(CartContext)
    const { cart } = cartState
    const getTotal = () => {
        let total = 0
        for (const item of cart) {
            total += item.qty * item.price;
        }
        return total
    }
    const text = whatsAppMessage(cart)
    const total = getTotal()
    return (
        <CartContainer>
            {
                cart.length > 0 ?
                    <CartItems>
                        {
                            cart.map((item, idx) => <CartItem key={idx} data={item} delFromCart={delFromCart} addToCart={addToCart} />)
                        }
                    </CartItems> : <EmptyCart>No has agregado productos</EmptyCart>
            }
            {
                cart.length > 0 ?
                    <TotalContainer>
                        <h2>Total</h2>
                        <p>{total.toFixed(2)}</p>
                    </TotalContainer> : <></>
            }

            <LinksContainer>
                <LinkR to='/products'>Productos</LinkR>
                <LinkW href={`https://wa.me/573043822536?text=${text}`}>Enviar</LinkW>
            </LinksContainer>
        </CartContainer>
    )
}

export default ShoppingCart