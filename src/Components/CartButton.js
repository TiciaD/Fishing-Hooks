import { useContext } from 'react';
import {Button, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import {AppContext} from '../App';

const CartButton = (props) => {
    const cartState = useContext(AppContext);
    return (
        <Button variant="primary" onClick={props.onClick}>
            <FaShoppingCart /> <Badge bg="secondary">{cartState.cart.length}</Badge>
        </Button>
    );
    };

export default CartButton;
