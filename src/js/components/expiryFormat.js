// Auxiliary function
// Insert spaces for long numbers
const numberWithSlash = (x) => x.toString().replace(/\d{2}(?=.)/g, '$&/').trim();

const expiryFormatInputs = document.querySelectorAll(".js-expiry-format");

if (expiryFormatInputs.length > 0) {
    [...expiryFormatInputs].forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = numberWithSlash(e.target.value);
        });
    });
}