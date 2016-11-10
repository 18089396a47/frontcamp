/* eslint no-console: 0 */
require('reset-css');// babel required
require('./styles');
require('./index.html');

const firstLoad = require('./scripts/newsLoader');
const render = require('./scripts/render');

window.onload = () => {
    const news = document.getElementsByClassName('news-container')[0];

    firstLoad
        .then(render.bind(this, news))
        .catch(console.log);
};
