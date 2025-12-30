(function () {
    fetch('./assets/css/icons.svg')
        .then(res => res.text())
        .then(svg => {
            const div = document.createElement('div');
            div.style.display = 'none';
            div.innerHTML = svg;
            document.body.prepend(div);
        })
        .catch(err => {
            console.error('SVG Sprite load failed:', err);
        });
})();


$(function () {
    "use strict";

    $(".simplebar-menu").each(function () {
        if (!this.SimpleBar) {
            new SimpleBar(this);
        }
    });
});