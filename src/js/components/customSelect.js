// Initialize custom select

const customSelects = document.querySelectorAll(".select-custom__wrapper");

if (customSelects.length) {
	Array.from(customSelects).forEach((select) => {
		const choices = new Choices(select, {
			searchEnabled: false,
			itemSelectText: "",
			shouldSort: false,
		});

		const selectWrapper = select.closest(".select-custom");

		if (selectWrapper.classList.contains("select-custom--custom-scrollbar")) {
			const choicesList = selectWrapper.querySelector(".choices__list--dropdown .choices__list");

			let customScrollbar = new SimpleBar(choicesList, {
				autoHide: false,
			});

			select.addEventListener("showDropdown", function() {
				// const choicesList = selectWrapper.querySelector(".choices__list--dropdown .choices__list");

				customScrollbar.unMount();
				
				customScrollbar = new SimpleBar(choicesList, {
					autoHide: false,
				});
			});
		}
	});
}
