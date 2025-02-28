document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[name="product"]');

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            // Hide all dropdown sections
            document.querySelectorAll(".options").forEach(option => {
                option.style.display = "none";
            });

            // Show the selected unit's dropdown
            const selectedOption = this.closest(".product-option").querySelector(".options");
            if (selectedOption) {
                selectedOption.style.display = "block";
            }
        });
    });
});
