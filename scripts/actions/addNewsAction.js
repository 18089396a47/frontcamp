import { TYPES } from '../../constants';

export default function addNewsAction(value) {
    return {
        type: TYPES.ADD_NEWS,
        value,
    };
}
