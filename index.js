/* eslint no-console: 0 */
/* eslint import/no-unresolved: 0 */
import 'reset-css';
import './styles';
import './index.html';

import firstLoad from './scripts/newsLoader';
import render from './scripts/render';

import json from './jsonLoader/jsonLoader!./test.json';

console.log(json);

window.onload = () => {
    const news = document.getElementsByClassName('news-container')[0];

    firstLoad
        .then(render.bind(this, news))
        .catch(console.log);
};
