import { DEFAULT_IMAGE, DATE_OPTIONS } from '../constants';

function buildNode({ urlToImage = DEFAULT_IMAGE, url, title, publishedAt }) {
    if (!url || !title) {
        return undefined;
    }
    const node = document.createElement('li');
    const image = document.createElement('img');
    const info = document.createElement('div');
    const href = document.createElement('a');
    const date = document.createElement('div');

    node.classList.add('news-item');

    image.src = urlToImage;
    image.classList.add('news-image');

    info.classList.add('news-info');

    href.href = url;
    href.innerText = title;
    href.classList.add('news-title');

    date.innerText = new Date(publishedAt).toLocaleString('en-EN', DATE_OPTIONS);
    date.classList.add('news-date');

    info.appendChild(href);
    info.appendChild(date);
    node.appendChild(image);
    node.appendChild(info);
    return node;
}

function animateNews(news, nodes) {
    nodes.forEach((node, index) => {
        setTimeout(() => { news.appendChild(node); }, index * 20);
    });
}

export default function render(news, { articles } = {}) {
    animateNews(news, articles.map(buildNode));
}
