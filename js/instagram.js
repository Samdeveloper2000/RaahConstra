document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.querySelector(".instagram-icon");
    function handleScroll() {
        if (window.scrollY > 50) {
            whatsappButton.classList.add("visible");
        } else {
            whatsappButton.classList.remove("visible");
        }
    }
    window.addEventListener("scroll", handleScroll);
});
