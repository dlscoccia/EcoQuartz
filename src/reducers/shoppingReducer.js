import { TYPES } from "../actions/shoppingActions";
import { products } from '../data/products'

export const shoppingInitialState = {
    products: products,
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            let itemExists = state.cart.find(item => item.id === action.payload)
            return itemExists ? {
                ...state,
                cart: state.cart.map(item => item.id === newItem.id ? {
                    ...item,
                    qty: item.qty + 1
                } : item)
            } : {
                ...state,
                cart: [...state.cart, {
                    ...newItem,
                    qty: 1
                }]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === action.payload)
            return itemToDelete.qty > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                        ...item,
                        qty: item.qty - 1
                    } :
                    item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        default:
            return state
    }
}