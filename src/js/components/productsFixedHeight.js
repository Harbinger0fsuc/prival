const fixedHeightProductsList = document.querySelectorAll(".js-prds-fixed-height");

if (fixedHeightProductsList.length > 0) {
    [...fixedHeightProductsList].forEach((list) => {
        const singleElement = list.querySelector(".products-list__item");
        const singleElementStyles = window.getComputedStyle(singleElement);
        const singleElementMb = parseFloat(singleElementStyles["marginBottom"]);
        const singleElementHeight = singleElement.offsetHeight;

        list.style.height = `${(singleElementHeight * 3) + (singleElementMb * 2)}px`;
    });
}