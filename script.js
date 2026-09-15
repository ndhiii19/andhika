/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1800);

});


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

});


function animateCursor() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* =========================================
   CURSOR HOVER
========================================= */

const interactiveElements = document.querySelectorAll(
    "a, button, .project-image, .skill-item"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        follower.style.width = "60px";
        follower.style.height = "60px";

    });

    element.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";

    });

});


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-open");

});


/* Close mobile menu */

document.querySelectorAll(".nav-link").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-open");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-header, .about-content, .skill-item, .project-card, .statement-inner, .contact-content, .socials"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   PROJECT IMAGE PARALLAX
========================================= */

const projectImages = document.querySelectorAll(
    ".project-image"
);

window.addEventListener("scroll", () => {

    projectImages.forEach((image) => {

        const rect = image.getBoundingClientRect();

        const center = window.innerHeight / 2;

        const distance = rect.top - center;

        const movement = distance * -0.03;

        image.style.transform =
            `translateY(${movement}px)`;

    });

});


/* =========================================
   MAGNETIC CIRCLE BUTTON
========================================= */

const circleButtons = document.querySelectorAll(
    ".circle-button, .contact-button"
);

circleButtons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =========================================
   TEXT TILT EFFECT
========================================= */

const logo = document.querySelector(".logo");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

    if (logo) {

        logo.style.transform =
            `translate(${x * 3}px, ${y * 3}px)`;

    }

});


/* =========================================
   SMOOTH PROJECT HOVER
========================================= */

document.querySelectorAll(".project-image").forEach((project) => {

    project.addEventListener("mouseenter", () => {

        project.style.transition =
            "transform 0.8s cubic-bezier(.2,.8,.2,1)";

    });

});


/* =========================================
   PREVENT EMPTY PROJECT LINKS
========================================= */

document.querySelectorAll('.project-link[href="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Project details can be added here later."
        );

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.querySelector(
    ".footer-bottom span"
);

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Ndhii. All rights reserved.`;

}