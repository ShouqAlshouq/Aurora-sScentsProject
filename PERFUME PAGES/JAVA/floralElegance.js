$(document).ready(function () {
    // ========== NAVIGATION HOVER EFFECT ===========
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );

    // ========== REVIEW FORM SUBMISSION ===========
    $('#review-form').submit(function (event) {
        event.preventDefault();

        var name = $('#name').val().trim();
        var comment = $('#comment').val().trim();
        var rating = $('#rating').val();

        // Validation checks
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        // Ensure the comment length is between 50 and 500 characters
        if (comment.length < 50 || comment.length > 500) {
            alert("Your review must be between 50 and 500 characters.");
            return;
        }

        // Ensure the comment contains at least 50 letters (A-Z or a-z)
        var letterCount = (comment.match(/[a-zA-Z]/g) || []).length;
        if (letterCount < 50) {
            alert("Your review must contain at least 50 letters (A-Z).");
            return;
        }

        // Append the review if validation passes
        $('#reviews').append(`
            <div class="review">
                <p><strong>${name}:</strong> "${comment}"</p>
                <p>Rating: ${'★'.repeat(rating)}</p>
            </div>
        `);

        // Reset the form
        $('#review-form')[0].reset();

        // Alert the user that their review was submitted successfully
        alert("Thank you for your review! Your feedback has been submitted.");
    });

    // ========== WISHLIST BUTTON ALERT ===========
    $('.wishlist-btn').click(function () {
        alert("This product has been added to your wishlist!");
    });
    // Focus and blur effects
    $("#name, #comment, #rating").focus(function () {
        $(this).css("background-color", "#E7DADA").css("color", "red");
    });

    $("#name, #comment, #rating").blur(function () {
        $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
    });
        // ========== BUY NOW BUTTON ===========
        $('.buy-now').click(function () {
            const name = $(this).data('name');
            const price = $(this).data('price');
    
            // Create a product object (you can enhance this with quantity, ID, etc.)
            const item = {
                id: Date.now(), // unique ID
                name: name,
                price: parseFloat(price),
                quantity: 1
            };
    
            // Get existing cart from localStorage or create new
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
            // Add this item to the cart
            cart.push(item);
    
            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
    
            // Redirect to the cart page
            window.location.href = "../cart.html";
        });
    
});
