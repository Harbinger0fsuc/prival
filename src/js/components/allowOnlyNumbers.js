// Auxiliary function
const onlyNumbers = (value) => {
    const re = /[^0-9]+/g;

    return value.replace(re, "");
};

const onlyNumbersInputs = document.querySelectorAll(".js-only-numbers");

if (onlyNumbersInputs.length > 0) {
    [...onlyNumbersInputs].forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = onlyNumbers(e.target.value);
        });
    });
}