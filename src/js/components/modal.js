const modalTogglers = document.querySelectorAll("[data-modal]");

if (modalTogglers.length > 0) {
    [...modalTogglers].forEach((toggler) => {
        toggler.addEventListener("click", function() {
            const modal = document.querySelector(`${this.dataset.modal}`);

            modal.classList.add("is-visible");
        });
    });
}