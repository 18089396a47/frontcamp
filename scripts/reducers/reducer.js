import { TYPES } from '../../constants';

function generateArticles(articles, arcticleIndex) {
    return articles.map((elem, index) => {
        if (index === arcticleIndex) {
            return Object.assign({}, elem, { checked: !elem.checked });
        }
        return elem;
    });
}

export default function reducer(state = {}, action) {
    switch (action.type) {
    case TYPES.ADD_NEWS:
        return Object.assign({}, state, { articles: action.value.articles });
    case TYPES.CHECK_NEWS:
        return Object.assign({}, state, {
            articles: generateArticles(state.articles, action.value),
        });
    default:
        return state;
    }
}
