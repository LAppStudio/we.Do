import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import {Creators, get, Types} from './reducer';

import GetTeam from '../../../services/firebase/utils/GetTeams';
import TeamTask from '../../../services/firebase/utils/TeamTask';

import {teams, teamsTasks} from '../../../mocks';

const USE_MOCK = process.env.REACT_APP_USE_MOCK === 'true';

const mockedSyncTeams = () => new Promise((res) => {
    const response = {status: 200, data: teams};

    setTimeout(() => {
        res(response)
    }, 1000);
});

const mockedSyncTeamsTask = () => new Promise((res) => {
    const response = {status: 200, data: teamsTasks};

    setTimeout(() => {
        res(response);
    }, 1000);
})

const formatData = ({name: title, members: qty,id, description}) => ({title, qty,id, description});

function* syncTeamsSaga() {
    try {
        const {status, data = []} = yield call(USE_MOCK ? mockedSyncTeams : () => {});

        const teams = yield call(GetTeam.getTeams) || [];

        const formattedTeams = teams.reduce((acc, {id, ...rest}, index) => {
            return {keys: {...acc.keys, [id]: index}, values: [...acc.values, formatData({...rest, id})]}
        }, {keys: {}, values: []})

        console.log(formattedTeams);

        return yield put(Creators.syncTeamsSuccess(formattedTeams.values, formattedTeams.keys));

        return yield put(Creators.syncTeamsError(null));
    } catch (error) {
        return yield put(Creators.syncTeamsError(null));
    }
}

function* selectTeamSaga({selectedTeam}) {
    try {

        if(selectedTeam === null) return yield put(Creators.selectTeamSuccess([], {}));

        const foundTasks = yield call(TeamTask.getTasksByTeam, selectedTeam);

        const formattedTasks = foundTasks.reduce((acc, {id, ...rest}, index) => {
            return {keys: {...acc.keys, [id]: index}, values: [...acc.values, formatData({...rest, id})]}
        }, {keys: {}, values: []})

        return yield put(Creators.selectTeamSuccess(formattedTasks.values, formattedTasks.keys));
    } catch (error) {
        return yield put(Creators.selectTeamError(error))
        
    }
}

function* syncTeamSaga() {
    try {
        const selectedTeam = yield select(get.selectedTeam);
        
        const foundTasks = yield call(TeamTask.getTasksByTeam, selectedTeam);
        
        const formattedTasks = foundTasks.reduce((acc, {id, ...rest}, index) => {
            return {keys: {...acc.keys, [id]: index}, values: [...acc.values, formatData({...rest, id})]}
        }, {keys: {}, values: []})
        
        console.log('syncTeam', selectedTeam, formattedTasks)

        return yield put(Creators.selectTeamSuccess(formattedTasks.values, formattedTasks.keys));
    } catch (error) {
        return yield put(Creators.syncSelectedTeamError(error))
        
    }
}

export default function*() {
    return yield all([
        takeLatest(Types.syncTeams, syncTeamsSaga),
        takeLatest(Types.selectTeam, selectTeamSaga),
        takeLatest(Types.syncSelectedTeam, syncTeamSaga)
    ])
}