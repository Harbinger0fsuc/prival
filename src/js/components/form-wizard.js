const formWizardInitialization = () => {
    const formWizard = document.querySelectorAll(".form-wizard");

    if (formWizard.length > 0) {
        [...formWizard].forEach((form) => {
            const nextBtns = form.querySelectorAll(".form-wizard__nextbtn");
            const refreshBtns = form.querySelectorAll(".form-wizard__refreshbtn")
            let currentStep = 0;

            // Indicator
            const fixStepIndicator = (n) => {
                const wizardProgressItems = form.querySelectorAll(".wizard-progress__item");

                wizardProgressItems.forEach((item, index) => {
                    item.classList.remove("is-active");

                    if (index === n) {
                        item.classList.add("is-active");
                    }
                });
            }

            // Show a certain pane
            const showPane = (n) => {
                const panes = form.querySelectorAll(".form-wizard__pane");

                panes[n].style.display = "block";
                fixStepIndicator(n);
            }

            // Show next pane
            const showNextPane = (n) => {
                const panes = form.querySelectorAll(".form-wizard__pane");

                panes[currentStep].style.display = "none";

                currentStep = currentStep + n;
                showPane(currentStep);
            }

            // Return back to the first pane
            const startAnew = () => {
                const panes = form.querySelectorAll(".form-wizard__pane");

                panes[currentStep].style.display = "none";
                
                currentStep = 0;

                showPane(currentStep);
            }

            showPane(currentStep);

            nextBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    showNextPane(1);
                });
            });

            refreshBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    startAnew();
                });
            });
        });
    }
};

formWizardInitialization();