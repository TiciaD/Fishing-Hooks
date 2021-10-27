import Home from './Pages/Home';
import MyNavbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <MyNavbar/>
            <Home/>
        </div>
    );
}

export default App;
