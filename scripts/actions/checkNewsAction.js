import { TYPES } from '../../constants';

export default function checkNewsAction(value) {
    return {
        type: TYPES.CHECK_NEWS,
        value,
    };
}
