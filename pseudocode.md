# Fishing Hooks Pseudocode
## Functionality
**Main Goal**: Create a website for a fishing store that displays products, allows you to order items, allows users to sign up/in with an email/password and finally allows the user to purchase the items in their cart.

**Path 1 Goal**: Have all products listed on a products page, that navigate to specific product page when clicked on and allow the user to add multiple products to their cart.
**Path 2 Goal**: Allow a user to fill out a form that dynamically displays Sub Total, Sales Tax, Shipping Cost, and Grand Total based on what they've added to their cart. As well as re-renders error notifications based on if fields are missing from the form.
**Path 3 Goal**: Allow a user to sign up and be given a token that is posted and saved in local storage for the next time they log in. As well as allow the user to sign out and delete their token that is posted and revoked from the API. Display the users data on a dashboard by accessing token from local storage.

### Things to Keep in Mind
- Only 1 path needs to be completed for Week 6
- Try to use generic hooks that can be reused for each path

## Basic MoSCoW
Must Have:
- Must use React hooks
- Must track page/view with React Router
- Must start on Home Page
- Must use conditional rendering to block access to restricted pages/views
- Must use local storage and React Router to allow user data to persist on reload

Should Have:
- Should use React Bootstrap

Could Have:
- Could 

Won't Have:
- Won't use class components
- Won't use next.js (yet)
- Won't do more than 2 paths (yet)

### Path 1 MoSCoW
Must Have:
- Must display purchase items
- Must be able to add multiple items to cart
    - when click add to cart, check how many of that item
- Must take user to product page when they click on item
    - whether item is in cart or on products page
- Must be able to remove items from cart

Should Have:
- Should be able to access cart from any page
- Should give option to change amount of item to add to cart
- Should ask user to login before they can add to cart if not already logged in

Could Have:
- Could use Toasts to alert user when item added/removed
- Could use Modals to ask user to login if not already
- Could generate random image for each product on product display
- Could filter products by type

Won't Have:
- Won't have class components
- Won't have page reload when clicking tab

### Path 2 MoSCoW
Must Have:
- Must have user enter email and payment info
- Must display order process step and running subtotal, tax, grand total
- Must update numbers based on user modifying cart or shipping info
- Must show error notification if user doesn't fill form out completely/correctly

### Path 3 MoSCoW
(Come Back Later)

## Functions and Components
1. App






























## Hooks Info
### What is a Reducer?
- takes 2 arguments, accumulated value (what's being reduced) and next item (next item in array) and reduces them to one value

Example
```
arr = [1,2,3,4]

// set function to be applied to each element in array
reducer = (accumulator, nextItem) => accumulator + nextItem

// pass in function and initial value
arr.reduce(reducer, 0)

(accumulator) 0 + (nextItem) 1 = 1
// result becomes new initial value
(accumulator) 1 + (nextItem) 2 = 3
(accumulator) 3 + (nextItem) 3 = 6
(accumulator) 6 + (nextItem) 4 = 10
```

- useReducer takes 2 arguments, typically current state and action that updates the state, then reduces them down to return one value: the new state

## Pseudocode


Products page links
```
props.products( item => 
    <Link to={/products/ itemId }>
        <ItemPage>
    </Link>
)
```

ADD Item
```
// find index of item in cart
// IF item is in cart, spread state of cart and increment amount of item
// ELSE add item to end of cart array
// set new state of cart
```

REMOVE Item
```
// find index of item in cart
// IF item amount is 1 in cart, filter cart and remove item id
// ELSE spread state of cart and decrement amount of item
// set new state of cart
```