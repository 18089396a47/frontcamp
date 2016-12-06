import { URL, KEY } from '../constants';

const request = new Request(`${URL}?source=cnn&apiKey=${KEY}`);

export default Promise.resolve(fetch(request))
    .then(response => response.json());
