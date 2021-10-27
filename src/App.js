import React, {createContext} from 'react';
import Home from './Pages/Home';
import MyNavbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from './Pages/Products';
import About from './Pages/About';
import ItemPage from './Pages/ItemPage';
import './App.css';
export const AppContext = createContext();

function App() {
    let dummyProps = {someItem: "random value"}


    return (
        <Router>
            <div className="App">
                <AppContext.Provider value={dummyProps}>
                    <MyNavbar/>
                    <Switch>
                        <Route exact path="/products/item">
                            <ItemPage/>
                        </Route>
                        <Route exact path="/products">
                            <Products/>
                        </Route>
                        <Route exact path="/about">
                            <About />
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
