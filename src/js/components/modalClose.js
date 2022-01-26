const modalCloseBtns = document.querySelectorAll(".js-close-modal");

if (modalCloseBtns.length > 0) {
    [...modalCloseBtns].forEach((btn) => {
        btn.addEventListener("click", function() {
            this.closest(".modal").classList.remove("is-visible");
        });
    });
}