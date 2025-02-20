// Initialize cart counter
let cartCounter = document.querySelector('.cart-counter');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart counter on page load
function updateCartCounter() {
    cartCounter.textContent = cart.length;
}

// Reset cart counter after payment
function resetCartCounter() {
    cart = [];
    localStorage.setItem('cartItems', JSON.stringify(cart));
    cartCounter.textContent = 0;
}

// Event listener for payment completion
document.addEventListener('paymentComplete', resetCartCounter);

// Initialize counter on page load
document.addEventListener('DOMContentLoaded', updateCartCounter);
