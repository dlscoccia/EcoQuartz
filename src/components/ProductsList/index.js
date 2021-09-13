import React, { useContext, useState } from 'react'
import { CartContext } from '../../App'
import ProductItem from '../ProductItem'
import { BtnContainer, Button, CartLink, Heading, ProductsContainer, ProductsGrid } from './ProductsListElements'

const ProductsList = () => {
    const { cartState, addToCart, delFromCart } = useContext(CartContext)
    const { products, cart } = cartState
    
    const [productList, setProductList] = useState(products)
    const filter = (category) => {
        if (category === 'todos') {
            setProductList(products)
        } else {
            const productsFilter = products.filter(product => product.category === category)
            setProductList(productsFilter)
        }
    }

    return (
        <>
        <ProductsContainer>
            <Heading>Productos</Heading>
            <BtnContainer>
                <Button onClick={() => filter('todos')}>Todos</Button>
                <Button onClick={() => filter('pegamento')}>Pegamento</Button>
                <Button onClick={() => filter('stucco')}>Stucco</Button>
                <Button onClick={() => filter('grafiado')}>Grafiado</Button>
                <Button onClick={() => filter('otros')}>Otros</Button>
            </BtnContainer>
            <ProductsGrid>
                {
                    productList.map((product) => <ProductItem key={product.id} data={product} cart={cart} addToCart={addToCart} delFromCart={delFromCart} />)
                }
            </ProductsGrid>
            <CartLink to='/checkout'>Pedido</CartLink>
        </ProductsContainer>
        </>
    )
}

export default ProductsList
