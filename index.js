/* eslint no-console: 0 */
/* eslint import/no-unresolved: 0 */
import 'babel-polyfill';
import 'reset-css';
import './styles';
import './index.html';
import Singleton from './patterns/singleton';
import createStore from './redux/createStore';

import firstLoad from './scripts/newsLoader';
import render from './scripts/render';
import reducer from './scripts/reducers/reducer';
import addNewsAction from './scripts/actions/addNewsAction';
import User from './patterns/command';
import Logger from './patterns/decorator';
import { listenFilterButton } from './scripts/newsFilter';

import json from './jsonLoader/jsonLoader!./test.json';

console.log(json);

const news = document.getElementsByClassName('news-container')[0];

const singleton = new Singleton();
const store = singleton.store = createStore(reducer);
singleton.user = new Logger(new User());

firstLoad
    .then(response => store.dispatch(addNewsAction(response)))
    .then(() => {
        render(news, store.getState().articles);
        listenFilterButton();
    })
    .catch(console.log);
