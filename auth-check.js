
(function () {
    if (sessionStorage.getItem("isRegistered") !== "true") {
        // Save the page they were trying to reach
        sessionStorage.setItem("redirectTarget", window.location.pathname);
        // Boot them to the login page
        window.location.href = "regist.html";
    }
})();
