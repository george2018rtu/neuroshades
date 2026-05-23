document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
const demoBtn = document.getElementById("demoBtn");
const overlay = document.getElementById("overlay");

demoBtn.addEventListener("click", () => {

    overlay.classList.add("active");

    setTimeout(() => {
        overlay.classList.remove("active");
    }, 2000);

});