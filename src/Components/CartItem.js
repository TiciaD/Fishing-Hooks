import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import './CartItem.css';
import {AppContext} from '../App';

const CartItem = (props) => {
    const cartState = useContext(AppContext);
    const handleRemoveItem = (e) => {
        cartState.removeItem(props)
        console.log({cartItem: props});
        console.log({cartItem: props.amount});
    }


  return (
    <li className='cart-item d-flex justify-content-between align-items-center border-bottom border-2'>
      <div>
        <h2>{props.name}</h2>
        <div >
          <span className="d-flex justify-content-between align-items-center">{`$${props.price}`}</span>
          <span className="fw-bold">x {props.amount}</span>
        </div>
      </div>
      <div>
        <Button variant="danger" size="sm" onClick={handleRemoveItem}>
            -
        </Button>{' '}
        <Button variant="primary" size="sm" onClick={props.handleAddItem}>
            +
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
