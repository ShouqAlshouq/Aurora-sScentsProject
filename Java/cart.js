$(document).ready(function () {
    loadCartFromStorage();

    // Load and display cart from localStorage
    function loadCartFromStorage() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartTable = $("#cart-items");
        cartTable.empty();  // Clear existing rows

        cart.forEach((item, index) => {
            let total = item.price * item.qty;
            cartTable.append(`
                <tr data-index="${index}">
                    <td>${item.name}</td>
                    <td class="price">د.إ ${item.price}</td>
                    <td><input type="number" value="${item.qty}" min="1" class="form-control quantity"></td>
                    <td class="total-price">د.إ ${total}</td>
                    <td><button class="btn remove-btn">X</button></td>
                </tr>
            `);
        });

        updateTotal();
    }

    // Update the total price
    function updateTotal() {
        let total = 0;
        $("#cart-items tr").each(function () {
            let qty = parseInt($(this).find(".quantity").val());
            let priceText = $(this).find(".price").text().replace(/[^\d.]/g, "");
            let price = parseFloat(priceText);
            let itemTotal = price * qty;
            $(this).find(".total-price").text("د.إ " + itemTotal.toFixed(2));
            total += itemTotal;
        });
        $("#total").text("د.إ " + total.toFixed(2));
    }

    // Handle quantity input styling
    $(document).on("focus", ".quantity", function () {
        $(this).css("background-color", "#E7DADA").css("color", "red");
    }).on("blur", function () {
        $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
    });

    // Update total when quantity changes
    $(document).on("input", ".quantity", updateTotal);

    // ✅ REMOVE item when X button is clicked
    $(document).on("click", ".remove-btn", function () {
        let row = $(this).closest("tr");
        let index = row.data("index");

        // Get current cart
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Remove the item at the index
        cart.splice(index, 1);

        // Update localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Reload cart from storage
        loadCartFromStorage();
    });

    // Handle checkout button
    $("#checkout-btn").on("click", function (event) {
        if ($("#cart-items tr").length === 0) {
            event.preventDefault();
            alert("Your cart is empty! Please add items before proceeding to checkout.");
        } else {
            alert("Proceeding to checkout...");
            window.location.href = "checkout.html";
        }
    });
});
