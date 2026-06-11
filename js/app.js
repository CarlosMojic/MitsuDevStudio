//==================================
//
// MitsuDev Studio
//
//==================================

// Navbar Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



//==================================
//
// Fade Animation
//
//==================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach((element) => {

    observer.observe(element);

});



console.log("🚀 MitsuDev Studio iniciado correctamente.");