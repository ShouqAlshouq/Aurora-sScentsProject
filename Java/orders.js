$(document).ready(function () {
    // ========== NAVIGATION HOVER EFFECT ==========
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );
   
    let orders = [
        {
            id: "0001",
            date: "2025-03-10",
            items: "Rose Perfume, Lavender Mist",
            total: "165 د.إ",
            status: "Shipped"
        },
       
      
    ];

    let tableBody = $("#ordersTableBody");

   
    orders.forEach(function (order) {
        let row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.date}</td>
                <td>${order.items}</td>
                <td>${order.total}</td>
                <td>${order.status}</td>
            </tr>
        `;
        tableBody.append(row); 
    });

});