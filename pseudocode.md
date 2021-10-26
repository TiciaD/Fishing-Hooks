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
- 