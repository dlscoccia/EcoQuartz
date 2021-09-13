import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import {CartContext} from '../../App'
import whatsAppMessage from '../../utils/ws'


const ShoppingCart = () => {
    const { cartState, delFromCart } = useContext(CartContext)
    const { cart } = cartState
    return (
        <div>
            <h3>Carrito</h3>
            <article className='box'>
                {
                    cart.map((item, idx) => <CartItem key={idx} data={item} delFromCart={delFromCart} />)
                }
            </article>
            <Link to='/products'>Productos</Link>
            <Link to='/#' onClick={() => whatsAppMessage(cart)}>Siguiente</Link>
        </div>
    )
}

export default ShoppingCart