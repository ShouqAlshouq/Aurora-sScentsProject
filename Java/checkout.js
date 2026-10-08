$(document).ready(function () {
    // Hover effect for nav links
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );

    // Focus and blur effects for inputs
    $("#name, #email, #address, #phone, #expiry ,#cardNumber, #cvv").focus(function () {
        $(this).css("background-color", "#E7DADA").css("color", "red");
    });

    $("#name, #email, #address, #phone, #expiry ,#cardNumber, #cvv").blur(function () {
        $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
    });

    // Toggle the visibility of card details based on payment method
    document.querySelectorAll('input[name="payment"]').forEach((input) =>
        input.addEventListener("change", () =>
            document.getElementById("card-details").style.display = 
                input.value === "card" ? "block" : "none"
        )
    );

    // Handle form submit with validation and sending data to backend
    $("#checkout-form").on("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Validate the form
        if (!validateCheckout()) return;

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            address: $('#address').val(),
            phone: $('#phone').val(),
            payment: $('input[name="payment"]:checked').val(),
            cardNumber: $('#cardNumber').val(),
            expiry: $('#expiry').val(),
            cvv: $('#cvv').val()
        };

        // Send form data and cart items to the server
        fetch("/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ order: formData, cart: cart })
        })
        .then(res => res.text())
        .then(data => {
            alert("Order placed successfully!");
            localStorage.removeItem("cart"); // Clear cart after successful order
            window.location.href = "index.html"; // Redirect to homepage or other page
        })
        .catch(err => {
            alert("An error occurred. Please try again.");
            console.error(err);
        });
    });
});

// Validation function (already included in your code)
function validateCheckout() {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var address = $("#address").val().trim();
    var phone = $("#phone").val().trim();
    var paymentMethod = $('input[name="payment"]:checked').val();

    // Validate Full Name
    if (name === "") {
        alert("Full Name can't be blank!");
        return false;
    }

    // Validate Email
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    // Validate Address
    if (address === "") {
        alert("Shipping Address can't be blank!");
        return false;
    }

    // Validate Phone Number (UAE format)
    var phoneRegex = /^(?:\+971|971)(\d{9})$/;
    if (phone === "" || !phoneRegex.test(phone)) {
        alert("Please enter a valid UAE phone number in the format +971XXXXXXXXX or 971XXXXXXXXX");
        return false;
    }

    // Validate Payment Method
    if (!paymentMethod) {
        alert("Please select a payment method!");
        return false;
    }

    // If "Card" Payment Method is Selected, Validate Card Details
    if (paymentMethod === "card") {
        var cardNumber = $("#cardNumber").val().trim();
        var expiry = $("#expiry").val().trim();
        var cvv = $("#cvv").val().trim();

        // Validate Card Number (16 digits)
        var cardRegex = /^\d{16}$/;
        if (cardNumber === "" || !cardRegex.test(cardNumber)) {
            alert("Please enter a valid 16-digit Card Number!");
            return false;
        }

        // Validate Expiry Date (MM/YY format)
        var expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (expiry === "" || !expiryRegex.test(expiry)) {
            alert("Please enter a valid Expiry Date in MM/YY format!");
            return false;
        }

        // Validate CVV (3 digits)
        var cvvRegex = /^\d{3}$/;
        if (cvv === "" || !cvvRegex.test(cvv)) {
            alert("Please enter a valid 3-digit CVV!");
            return false;
        }
    }

    alert("Thank you! Your order has been placed successfully.");
    return true;
}
