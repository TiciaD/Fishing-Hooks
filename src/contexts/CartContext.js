import {createContext} from 'react';

const Cart = createContext();

const CartContext = (props) => {
    const randomCart = {
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {}
    };

    console.log(randomCart);
    
    return <Cart.Provider>{props.children}</Cart.Provider>
};

export default CartContext;



