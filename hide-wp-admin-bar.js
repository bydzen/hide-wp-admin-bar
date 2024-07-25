// Get the WP Admin Bar element
var adminBar = document.querySelector("#wpadminbar");
// Timeout to set if you hovering the WP Admin Bar
var showDelay;

// Check if page have WP Admin Bar
if (adminBar) {
    // Create style inside header tag with 1 second delay
    function addStyle(delayInMilliseconds) {
        var style = document.createElement("style");
        style.textContent = "html { transition: margin 0.25s ease; margin-top: 0 !important; } #wpadminbar { transition: transform 0.25s ease, opacity 0.25s ease; } #wpadminbar.sp-hide { transform: translateY(-80%); opacity: 0; } #wpadminbar.sp-show { transform: translateY(0); opacity: 1; }";
        setTimeout(function () {
            document.head.appendChild(style);
        }, delayInMilliseconds);
    }
    addStyle(1000);
    // Initiate WP Admin Bar hide for the first time page show up
    adminBar.classList.add("sp-hide");
}

// Show the WP Admin Bar if mouse over
adminBar.addEventListener("mouseover", function () {
    clearTimeout(showDelay);
    adminBar.classList.add("sp-show");
    adminBar.classList.remove("sp-hide");
});

// Hide the WP Admin Bar if mouse out after 1.5 seconds wait
adminBar.addEventListener("mouseout", function () {
    showDelay = setTimeout(function () {
        adminBar.classList.add("sp-hide");
        adminBar.classList.remove("sp-show");
    }, 1500);
});
