$(document).ready(function () {
    $(".buy-now").on("click", function () {
        const item = {
            name: $(this).data("name"),
            price: $(this).data("price"),
            qty: 1
        };
    
        // Get current cart from localStorage (or create an empty array if not present)
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Add the item to the cart
        cart.push(item);
    
        // Save updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    
        // Optionally redirect to the cart page
        window.location.href = "cart.html";  // Redirect to cart page
    });
    
    // ========== NAVIGATION HOVER EFFECT ===========
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );
});
