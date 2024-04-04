
const isLoggedIn = true; 


document.getElementById("orders-link").addEventListener("click", function(event) {
    event.preventDefault();
    if (isLoggedIn) {
        
        loadOrderHistory();
    } else {
        
        window.location.href = "/login"; 
    }
});


document.getElementById("cart-link").addEventListener("click", function(event) {
    event.preventDefault();
    if (isLoggedIn) {
        
        loadShoppingCart();
    } else {
        
        window.location.href = "/login"; 
    }
});


function loadOrderHistory() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "<h2>Order History</h2><p>Display user's order history here...</p>";
    
}


function loadShoppingCart() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "<h2>Shopping Cart</h2><p>Display user's shopping cart here...</p>";
    
}
