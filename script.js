const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// Contact Form - Web3Forms
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");
    const originalText = submitButton.textContent;

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const formData = new FormData(contactForm);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert("Message sent successfully! Thank you for contacting me.");
            contactForm.reset();
        } else {
            alert("Message could not be sent. Please try again.");
        }

    } catch (error) {
        alert("Something went wrong. Please check your internet connection and try again.");
    }

    submitButton.textContent = originalText;
    submitButton.disabled = false;
});