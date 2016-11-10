const { DEFAULT_IMAGE } = require('../constants');

function buildNode({ multimedia: { 1: imagePreview = DEFAULT_IMAGE }, url, title }) {
    if (!url || !title) {
        return undefined;
    }
    const node = document.createElement('li');
    const image = document.createElement('img');
    const info = document.createElement('div');
    const href = document.createElement('a');

    node.classList.add('news-item');

    image.src = imagePreview.url;
    image.classList.add('news-image');

    info.classList.add('news-info');

    href.href = url;
    href.innerText = title;
    href.classList.add('news-title');

    info.appendChild(href);
    node.appendChild(image);
    node.appendChild(info);
    return node;
}

function animateNews(news, nodes) {
    nodes.forEach((node, index) => {
        setTimeout(() => { news.appendChild(node); }, index * 20);
    });
}

module.exports = function render(news, { results } = {}) {
    animateNews(news, results.map(buildNode));
};
