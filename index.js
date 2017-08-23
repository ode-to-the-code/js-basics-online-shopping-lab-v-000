var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item
 var itemPrice = Math.round(Math.random() * (100 - 1) + 1);
 var itemObject = {[itemName]: itemPrice }
 cart.push(itemObject)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    // access an object key in js
    x = Object.keys(cart);
    console.log(`In your cart, you have ${x} at ${x[0]}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
