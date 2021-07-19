import {all} from 'redux-saga/effects';

import teamsSaga from '../screens/Teams/redux/saga';

export default function*() {
    return yield all([teamsSaga()]);
};
