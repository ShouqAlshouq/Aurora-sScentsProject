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

// Ensure jQuery is loaded before running scripts
$(document).ready(function () {
    // Hover effect
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );

    // Focus and blur effects
    $("#name, #email, #subject, #message").focus(function () {
        $(this).css("background-color", "#E7DADA").css("color", "red");
    });

    $("#name, #email, #subject, #message").blur(function () {
        $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
    });
});

