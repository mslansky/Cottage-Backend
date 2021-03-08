## Welcome to Cottage! 

Live Link: https://cottage-lac.vercel.app/

Link to Github: https://github.com/mslansky/Cottage

Link to Server-Side Code: https://github.com/mslansky/Cottage-Backend

Link to Heroku Server-Side Code: https://cottage-backend.herokuapp.com/


This fullstack application is my final capstone. Cottage is an E-Commerce Homemade Gourmet Bakery Site
that allows for users to create a login and shop for local home baked goods! 

## Routes

/api/auth This route allows you to POST to authenticate a username, and password to login

/api/items This route allows you to GET one item, random items, or specific items for the shops and stores

/api/shops This route allows you to GET one shop by category or id to view a specific shop

/api/user This route POSTS a username, name, and password to create a profile

/api/cart This route POSTS, GETS, DELETES, and UPDATES Items into a cart to allow the user to change the quantity, delete, or view the items

## Landing page

This introductory page allows for users to sign-up or log in to an account. 
Then they are able to enter thier name, username, and password. Password must contain an uppercase letter, a lowercase letter, a number and a symbol.


## Shop Page

After logging in, the user views a shop with six random generated items. There is a dropdown to allow the user to explore shops by taste. There is also another dropdown to allow the user to explore specific shops by name. The page also displays a footer that allows for you to login, create a login, logout, and visit the landing page. The page also allows for the user to visit thier cart, once they are logged in. 



## Store Page

After selecting to search stores by either category or specific names, all of the items of either categories or stores are displayed. When a specific store is displayed the store picture, item, and description are also able to be viewed. From the store pages, items can be selected.

## Item Page
When an item is selected the item picture, name, description, price, and store name are also displayed. The store name is a link that allows the user to navigate back to the store. There is also an add to cart button that allows the user to add an item to the cart when they click if they are logged in. If the user is not logged in, they are promoted to log in to access thier cart. 

## Cart Page
When a user adds items to the cart they are then taken to the cart page. The user is still able to navigate stores from the category dropdown and store dropdown. The item pictures, names, prices, and quantity are displayed. The user is also able to add or subtract item quantities directly from the cart page. The bottom of the cart page has a checkout button that will take the user to a prompt stating that the items will be processed. This is the end of the user stories. 

## Tech Stack 
React - React Context Used
JSX
JavaScript ES6
HTML5
CSS3


Back-End Technology
Express.js
Node.js

