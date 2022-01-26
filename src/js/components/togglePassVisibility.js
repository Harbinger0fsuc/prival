const passwordTogglers = document.querySelectorAll(".js-toggle-password");

if (passwordTogglers.length > 0) {
    [...passwordTogglers].forEach((toggler) => {
        toggler.addEventListener("click", function() {
            const input = document.querySelector(`${toggler.dataset.input}`);

            this.classList.toggle("is-visible");

            if (input.type === "password") {
                input.type = "text";
              } else {
                input.type = "password";
            }
        });
    })
}