$(document).ready(function () {
    // ========== NAVIGATION HOVER EFFECT ===========
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );

    // ========== FORM FIELD FOCUS & BLUR EFFECT ===========
    $("#email, #fullName, #phone, #address1, #address2").focus(function () {
        $(this).css("background-color", "#E7DADA").css("color", "red");
    });

    $("input, textarea").blur(function () {
        $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
    });

    // ========== CONTACT FORM VALIDATION ==========
    function validateform() {
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var subject = $("#subject").val().trim();
        var message = $("#message").val().trim();

        if (name === "") {
            alert("Name can't be blank!");
            return false;
        }

        if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address!");
            return false;
        }

        if (subject === "") {
            alert("Subject can't be blank!");
            return false;
        }

        if (message === "") {
            alert("Message can't be blank!");
            return false;
        }

        alert("Thank you! Your message has been submitted successfully.");
        return true;
    }

    // ========== PROFILE FORM VALIDATION ===========
    function validateProfileForm() {
        console.log("Profile form validation triggered!"); // Debugging

        var fullName = $("#fullName").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var address1 = $("#address1").val().trim();

        if (fullName === "") {
            alert("Full Name can't be blank!");
            return false;
        }

        if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address!");
            return false;
        }

        if (phone === "") {
            alert("Phone Number can't be blank!");
            return false;
        }

        if (address1 === "") {
            alert("Address 1 can't be blank!");
            return false;
        }

        // Store profile completion status
        localStorage.setItem("profileCompleted", "true");

        alert("Profile saved successfully!");
        return true;
    }

    // ========== CHECK PROFILE COMPLETION WHEN CLICKING "MY ORDERS" ===========
    $(".btn-orders").click(function (event) {
        var profileCompleted = localStorage.getItem("profileCompleted");
    
        if (profileCompleted !== "true") {
            event.preventDefault();
            alert("Please complete your profile before accessing orders.");
        } else {
            window.location.href = "orders.html"; // Manual redirection
        }
    });

    // Attach validation to forms
    $("form[name='contactForm']").submit(function () {
        return validateform(); 
    });

    $("form[name='profilebox']").submit(function () {
        return validateProfileForm(); // Attach profile validation
    });

});
