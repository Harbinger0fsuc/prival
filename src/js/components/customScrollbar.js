const customScrollbarElems = document.querySelectorAll(".js-custom-scrollbar");

if (customScrollbarElems.length > 0) {
    [...customScrollbarElems].forEach((el) => {
        new SimpleBar(el, {
            autoHide: false,
        });
    });
}