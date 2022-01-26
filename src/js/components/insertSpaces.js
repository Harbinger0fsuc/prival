// Auxiliary function
// Insert spaces for long numbers
const numberWithSpaces = (x) => x.toString().replace(/\d{4}(?=.)/g, '$& ').trim();

const insertSpaceInputs = document.querySelectorAll(".js-insert-space");

if (insertSpaceInputs.length > 0) {
    [...insertSpaceInputs].forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = numberWithSpaces(e.target.value);
        });
    });
}