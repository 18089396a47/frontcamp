const { URL, KEY } = require('../constants');

const request = new Request(`${URL}?api-key=${KEY}`);

module.exports = Promise.resolve(fetch(request))
    .then(response => response.json());
