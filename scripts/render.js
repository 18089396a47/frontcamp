/* eslint no-param-reassign: 0 */
import { DEFAULT_IMAGE, DATE_OPTIONS } from '../constants';
import { newsFilter } from './newsFilter';

function buildNode({ urlToImage = DEFAULT_IMAGE, url, title, publishedAt, checked, index },
        elementIndex) {
    if (!url || !title) {
        return undefined;
    }
    const node = document.createElement('li');
    const image = document.createElement('img');
    const info = document.createElement('div');
    const href = document.createElement('a');
    const date = document.createElement('div');
    const checkboxLabel = document.createElement('label');
    const checkbox = document.createElement('input');
    const checkboxImage = document.createElement('div');

    node.classList.add('news-item');

    image.src = urlToImage;
    image.classList.add('news-image');

    info.classList.add('news-info');

    checkboxLabel.classList.add('news-checkbox');

    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    if (index) {
        checkbox.addEventListener('click', newsFilter.bind(this, index));
    } else {
        checkbox.addEventListener('click', newsFilter.bind(this, elementIndex));
    }

    checkboxImage.classList.add('checkbox-image');

    href.href = url;
    href.innerText = title;
    href.classList.add('news-title');

    date.innerText = new Date(publishedAt).toLocaleString('en-EN', DATE_OPTIONS);
    date.classList.add('news-date');

    info.appendChild(href);
    info.appendChild(date);
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(checkboxImage);
    node.appendChild(image);
    node.appendChild(info);
    node.appendChild(checkboxLabel);
    return node;
}

function animateNews(newsContainer, nodes) {
    if (newsContainer.children.length) {
        newsContainer.innerHTML = '';
    }
    nodes.forEach((node, index) => {
        setTimeout(() => {
            newsContainer.appendChild(node, index);
        }, index * 20);
    });
}

export default function render(newsContainer, articles) {
    animateNews(newsContainer, articles.map(buildNode));
}
