import { useState } from 'react';
import {Button} from 'react-bootstrap';
import './ItemForm.css';

const ItemForm = (props) => {
// Model
  const [isAmountValid, setAmountValid] = useState(true);
  const [input, setInput] = useState('')

// Controller
  const handleSubmit = (event) => {
    event.preventDefault();


    const enteredNum = +input;

    if (input.trim().length < 0) {
      setAmountValid(false);
      return;
    } else {
      props.onAddToCart(enteredNum);
    }
  };

// View
  return (
    <form onSubmit={handleSubmit}>
      <div className="input d-flex align-items-center">
        <input type='number' defaultValue='1' min='0' step='1'/>
        <Button variant="primary" size="sm">Add to Cart</Button>
        {isAmountValid === false && <p>Please enter a valid amount.</p>}
    </div>
    </form>
  );
};

export default ItemForm;