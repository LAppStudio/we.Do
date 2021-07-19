import {combineReducers} from 'redux'

import {PATH as teamsPath, reducer as teamsReducer} from '../screens/Teams/redux/reducer';

export default combineReducers({
    [teamsPath]: teamsReducer,
});