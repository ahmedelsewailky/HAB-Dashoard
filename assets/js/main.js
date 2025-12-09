document.addEventListener("click", function (e) {
    if (e.target.classList.contains("qty-btn")) {
        let parent = e.target.closest(".cart-qty-control");
        let valueEl = parent.querySelector(".qty-value");
        let current = parseInt(valueEl.innerText);

        if (e.target.classList.contains("plus")) {
            current++;
        } else if (e.target.classList.contains("minus")) {
            current = Math.max(1, current - 1); // ماينقصش عن 1
        }

        valueEl.innerText = current;
    }
});