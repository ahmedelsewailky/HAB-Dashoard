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
$(function () {
    const $body = $('body');
    const $sidebar = $('.sidebar');

    // تحميل الحالة من localStorage
    if (localStorage.getItem('sidebar') === 'collapsed') {
        $body.addClass('collapsed');
    }

    // Click على التوجلر
    $('.toggler-sidebar').on('click', function () {
        $body.toggleClass('collapsed');
        $body.removeClass('sidebar-hovered');

        localStorage.setItem(
            'sidebar',
            $body.hasClass('collapsed') ? 'collapsed' : 'expanded'
        );
    });

    // Hover يفتح مؤقتًا
    $sidebar.on('mouseenter', function () {
        if ($body.hasClass('collapsed')) {
            $body.addClass('sidebar-hovered');
        }
    });

    // خروج الهوفر يرجع مقفول
    $sidebar.on('mouseleave', function () {
        $body.removeClass('sidebar-hovered');
    });
});