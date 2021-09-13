import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import React, { useReducer } from 'react';
import { TYPES } from './actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from './reducers/shoppingReducer';
import Footer from './components/Footer';
import Header from './components/Header';

export const CartContext = React.createContext()

function App() {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const delFromCart = (id, all = false) => {
    console.log(all)
    if (!all) {
      dispatch({
        type: TYPES.REMOVE_ONE_FROM_CART,
        payload: id
      })
    } else {
      dispatch({
        type: TYPES.REMOVE_ALL_FROM_CART,
        payload: id
      })
    }
  }
  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART
    })
  }
  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch, addToCart, delFromCart, clearCart }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/checkout' component={Checkout} exact />
        </Switch>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;