$(document).ready(function () {
    // ========== NAVIGATION HOVER EFFECT ==========
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );

    // ========== FORM FIELD FOCUS & BLUR EFFECT ==========
    $("#name, #email, #subject, #password").focus(function () {
        $(this).css("background-color", "#E7DADA").css("color", "red");
    });

    $("input, textarea").blur(function () {
        $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
    });
        //LOGIN FORM
        $("#toggle-form").click(function (event) {
            event.preventDefault();
            let formTitle = $("#form-title");
            let loginForm = $("#login-form");
    
            if (formTitle.text() === "Login") {
                formTitle.text("Sign Up");
                loginForm.html(`
                <input type="text" id="name" class="form-control" placeholder="Full Name" required>
                <input type="email" id="email" class="form-control" placeholder="Email" required>
                <input type="password" id="password" class="form-control" placeholder="Password" required>
                <button type="submit" class="btn-custom">Sign Up</button>
            `);
                $("#toggle-form").text("Already have an account? Login");
            } else {
                formTitle.text("Login");
                loginForm.html(`
                <input type="email" id="email" class="form-control" placeholder="Email">
                <input type="password" id="password" class="form-control" placeholder="Password">
                <button type="submit" class="btn-custom">Login</button>
            `);
                $("#toggle-form").text("Don't have an account? Sign Up");
            }
    
            // Handle input field color changes dynamically
            $(".form-control").on("focus", function () {
                $(this).css("background-color", "#E7DADA").css("color", "red");
            }).on("blur", function () {
                $(this).css("background-color", "#D7D2CB").css("color", "#46545C");
            });
    
            // Form submission handling with validation and redirection
            $(document).on("submit", "#login-form", function (event) {
                event.preventDefault(); // Prevents actual form submission
    
                let email = $("#email").val().trim();
                let password = $("#password").val().trim();
                let name = $("#name").length ? $("#name").val().trim() : null; // Check if name field exists (signup mode)
    
                // Basic validation
                if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }
    
                if (!password || password.length < 6) {
                    alert("Password must be at least 6 characters.");
                    return;
                }
    
                if (name !== null && name === "") { // If signup form, check name field
                    alert("Full Name cannot be empty.");
                    return;
                }
    
                // Success message and redirection
                alert("Login Successful! Redirecting to your profile...");
                window.location.href = "profile.html"; // Redirect to profile page
            });
        });
    });
    
    