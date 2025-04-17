const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isActive = content.classList.contains("active");

        document.querySelectorAll(".accordion-content").forEach(item => {
            item.classList.remove("active");
            item.previousElementSibling.setAttribute("aria-expanded", "false");
        });

        if (!isActive) {
            content.classList.add("active");
            header.setAttribute("aria-expanded", "true");
        }
    });
});

const forms = document.querySelectorAll(".email-form");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = form.querySelector("input[type='email']");
        const email = emailInput.value.trim();

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailInput.classList.remove("email-input-error");
            alert("E-mail válido! Inscrição simulada.");
            emailInput.value = "";
        } else {
            emailInput.classList.add("email-input-error");
            alert("Por favor, insira um e-mail válido.");
        }
    });
});