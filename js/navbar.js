// Active Navigation Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Auto-close mobile menu after tapping a link
const navbarCollapseEl = document.getElementById("navbar");

if (navbarCollapseEl) {

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbarCollapseEl.classList.contains("show")) {

                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl);
                bsCollapse.hide();

            }

        });

    });

}

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});