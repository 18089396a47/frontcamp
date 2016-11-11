import { URL, KEY } from '../constants';

const request = new Request(`${URL}?api-key=${KEY}`);

export default Promise.resolve(fetch(request))
    .then(response => response.json());
