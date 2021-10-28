import React, {createContext, useState} from 'react';
import MyNavbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import ItemPage from './Pages/ItemPage';
import CartModal from './Components/CartModal';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
export const AppContext = createContext();

function App() {
    let dummyProps = {
        "id": 1,
        "name": "Whopper Plopper",
        "description": "Amet ad in quis rerum ut at eveniet et quidem ut et corrupti quisquam sit est et praesentium similique.",
        "type": "tool",
        "image": "https://via.placeholder.com/800x600.png/00ccff?text=tool+odit",
        "price": 358,
        "created_at": "2021-10-26T19:02:14.000000Z",
        "updated_at": "2021-10-26T19:02:14.000000Z"
    };

    const [isCartShown, setIsCartShown] = useState(false);

    const showCart = () => {
        setIsCartShown(true)
    };

    const hideCart = () => {
        setIsCartShown(false)
    };

    return (
        <Router>
            <div className="App">
                <AppContext.Provider value={dummyProps}>
                    <MyNavbar onShowCart={showCart}/>
                        {isCartShown && <CartModal onClose={hideCart} show={isCartShown}/>}
                        <Switch>
                            <Route exact path="/products/item">
                                <ItemPage/>
                            </Route>
                            <Route exact path="/products">
                                <Products/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                            <Route exact path="/home">
                                <Home/>
                            </Route>
                        </Switch>
                </AppContext.Provider>
            </div>
        </Router>
    );
}

export default App;
