$(document).ready(function () {
    // ========== NAVIGATION HOVER EFFECT ==========
    $(".nav-link").hover(
        function () { $(this).css("color", "blueviolet"); },
        function () { $(this).css("color", "black"); }
    );
});