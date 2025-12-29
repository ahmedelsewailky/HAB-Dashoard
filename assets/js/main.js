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