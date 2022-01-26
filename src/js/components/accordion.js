// Accordion
const accordionHeaders = document.querySelectorAll(".accordion-secondary__header");

// Expand or collapse element on click, for one.
function expandElement(el, elWrapper = "", toggleClass = false, activeClass = "") {
	if (el.style.maxHeight) {
		el.style.maxHeight = null;

		if (toggleClass) {
			elWrapper.classList.remove(activeClass);
		}
	} else {
		el.style.maxHeight = `${el.scrollHeight}px`;

		if (toggleClass) {
			elWrapper.classList.add(activeClass);
		}
	}
}

if (accordionHeaders.length > 0) {
	Array.from(accordionHeaders).forEach((accordionHeader) => {
		accordionHeader.addEventListener("click", function (e) {
			e.preventDefault();

			const accordionContent = this.nextElementSibling;
			const accordionWrapper = this.parentElement;

			expandElement(accordionContent, accordionWrapper, true, "is-active");
		});
	});
}
