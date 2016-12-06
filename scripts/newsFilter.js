/* eslint no-param-reassign: 0 */
import Singleton from '../patterns/singleton';
import render from './render';

export function newsFilter(index) {
    const user = new Singleton().user;

    user.compute('check', index);
}

function filterButton(button) {
    const news = document.getElementsByClassName('news-container')[0];
    let isFavorite = false;

    return () => {
        const state = new Singleton().store.getState();
        isFavorite = !isFavorite;
        if (isFavorite) {
            button.innerText = 'Show All';
            render(news, state.articles
                .map((elem, index) => {
                    elem.index = index;
                    return elem;
                })
                .filter(el => el.checked));
        } else {
            button.innerText = 'Show Favorite';
            render(news, state.articles);
        }
    };
}

export function listenFilterButton() {
    const button = document.getElementById('filter-button');

    button.addEventListener('click', filterButton(button));
}
