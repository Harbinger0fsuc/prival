// Quantity picker functionality
const qntPicker = document.querySelectorAll(".qnt-picker");
const qntInputs = document.querySelectorAll(".qnt-picker__input");

if (qntPicker.length && qntInputs.length) {
	Array.from(qntPicker).forEach((picker) => {
		picker.addEventListener(
			"click",
			function (e) {
				const qntInput = this.querySelector(".qnt-picker__input");
				const qntInputMin = qntInput.getAttribute("min");
				const qntInputMax = qntInput.getAttribute("max");

				if (
					e.target.classList.contains("plus-btn") ||
					e.target.closest(".plus-btn")
				) {
					let currentValue = parseInt(qntInput.value);

					currentValue++;
					qntInput.value = currentValue;

					if (qntInput.value > qntInputMax - 1) {
						qntInput.value = qntInputMax;
					} else if (qntInput.value == 0) {
						qntInput.value = qntInputMin;
					}
				}

				if (
					e.target.classList.contains("minus-btn") ||
					e.target.closest(".minus-btn")
				) {
					let currentValue = parseInt(qntInput.value);

					currentValue--;
					qntInput.value = currentValue;

					if (qntInput.value <= qntInputMin) {
						qntInput.value = qntInputMin;
					}
				}
			},
			false
		);
	});

	Array.from(qntInputs).forEach((input) => {
		input.addEventListener("keypress", function (e) {
			let currValue = this.value;

			if (currValue <= 0) {
				this.value = "";
			}

			if (
				e.keyCode === 8 ||
				e.keyCode === 13 ||
				e.keyCode === 37 ||
				e.keyCode === 39 ||
				e.keyCode === 46
			) {
				return;
			}

			if (e.keyCode > 47 && e.keyCode < 58 && currValue.length < 2) {
				let c = String.fromCharCode(e.keyCode);
				let val = parseInt(c);
				let textVal = parseInt(currValue ?? "0");
				let result = textVal + val;

				if (result <= 0 || result >= 99) {
					e.preventDefault();
				}

				if (currValue === "0") {
					this.value = val;
					e.preventDefault();
				}
			} else {
				e.preventDefault();
			}
		});
	});
}
