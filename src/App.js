import React, {createContext, useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import MyNavbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import ItemPage from './Pages/ItemPage';
import Cart from './Pages/Cart';
import CartProvider from './contexts/CartContext';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';


export const AppContext = createContext();

function App() {
    // Model
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([])
    const [isCartShown, setIsCartShown] = useState(false);


    // Controller
    function addItem(item) {
        const isInCart = cart.map((currentItem) => currentItem.id).includes(item.id);
        console.log({InCart: isInCart})
          let cartItems = null;
          if (isInCart) {
            const newCartItems = cart.map((newItem) => {
              if (newItem.id === item.id) {
                return {
                  ...newItem,
                  amount: newItem.amount + 1
                };
              }
              console.log({newCart: newCartItems});
              return newItem;
            });
            setCart([...newCartItems]);
          } else {
            setCart([...cart, item]);
            console.log({AppCart: cart})
          }
    };

    function removeItem(item) {
        console.log({item: item})
        // let filtered = cart.filter(
        //   (oldItem) => oldItem.id !== item.id);
        // setCart(filtered)
        const existingCartItemIndex = cart.findIndex(
          (oldItem) => oldItem.id === item.id
        );
        console.log({cart: cart})
        console.log({index: existingCartItemIndex});
        const existingItem = cart[existingCartItemIndex];
        console.log({eItem: existingItem.amount});
        // // const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = cart.filter(oldItems => oldItems.id !== item.id);
          console.log({update: updatedItems});
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          console.log({newUpdate: updatedItem});
          updatedItems = [...cart];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
        return setCart([...updatedItems]);
    }


    const showCart = () => {
        setIsCartShown(true)
    };
    
    const hideCart = () => {
        setIsCartShown(false)
    };
    
    useEffect(() => {
        const fetchItems = async () => {
        const response = await axios.get('products.json');
        console.log({response: response.data[0].id})

        const allItems = [];
            for (let i = 0; i < response.data.length; i++) {
                allItems.push({
                    id: response.data[i].id,
                    name: response.data[i].name,
                    description: response.data[i].description,
                    price: response.data[i].price,
                    type: response.data[i].type,
                    amount: 1
                });
            }
            console.log({All: allItems});
            setItems(allItems);
        };
        
        fetchItems();
    }, []);
    console.log({items: items});


    return (
        // View
        <Router>
            <div className="App">
                <AppContext.Provider value={{items, cart, setCart, addItem, removeItem}}>
                    <CartProvider>
                        <MyNavbar onShowCart={showCart}/>
                            {isCartShown && <Cart onClose={hideCart} show={isCartShown}/>}
                            <Switch>
                                <Route exact path="/products/:id">
                                    <ItemPage/>
                                </Route>
                                <Route exact path="/products">
                                    <Products/>
                                </Route>
                                <Route exact path="/about">
                                    <About/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                    </CartProvider>
                </AppContext.Provider>
            </div>
        </Router>
    );
}

export default App;
