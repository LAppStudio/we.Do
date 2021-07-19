export const PATH = 'teams';

const INITIAL_STATE = {
    teams: [],
    teamKeys: {},
    loadingTeams: false,

    selectedTeam: null,
    teamBacklog: [],
    teamBacklogKeys: {},
    loadingTeamBacklog: false,

    selectedTeamTask: null,
    loadingTeamTask: false,
    teamTaskData: {},

    error: null,
};

export const Types = {
    syncTeams: `${PATH}/SYNC_TEAMS`,
    syncTeamsSuccess: `${PATH}/SYNC_TEAMS_SUCCESS`,
    syncTeamsError: `${PATH}/SYNC_TEAMS_ERROR`,

    selectTeam: `${PATH}/SELECT_TEAM`,
    selectTeamSuccess: `${PATH}/SELECT_TEAM_SUCCESS`,
    selectTeamError: `${PATH}/SELECT_TEAM_ERROR`,

    syncSelectedTeam: `${PATH}/SYNC_SELECTED_TEAM`,
    syncSelectedTeamSuccess: `${PATH}/SYNC_SELECTED_TEAM_SUCCESS`,
    syncSelectedTeamError: `${PATH}/SYNC_SELECTED_TEAM_ERROR`,

    selectTeamTask: `${PATH}/SELECT_TEAM_TASK`,
    selectTeamTaskSuccess: `${PATH}/SELECT_TEAM_TASK_SUCCESS`,
    selectTeamTaskError: `${PATH}/SELECT_TEAM_TASK_ERROR`,
};

export const Actions = {
    [Types.syncTeams]: (state) => ({...state, loadingTeams: true}),
    [Types.syncTeamsSuccess]: (state, {teams, teamKeys}) => ({...state, loadingTeams: false, teams, teamKeys}),
    [Types.syncTeamsError]: (state, {error}) => ({...state, loadingTeams: false, error}),

    [Types.selectTeam]: (state, {selectedTeam}) => ({...state, selectedTeam, loadingTeamBacklog: true, selectedTeamTask: INITIAL_STATE.selectedTeamTask, teamBacklog: INITIAL_STATE.teamBacklog, teamBacklogKeys: INITIAL_STATE.teamBacklogKeys}),
    [Types.selectTeamSuccess]: (state, {teamBacklog, teamBacklogKeys}) => ({...state, teamBacklog, teamBacklogKeys, loadingTeamBacklog: false}),
    [Types.selectTeamError]: (state, {error}) => ({...state, loadingTeamBacklog: false, error}),

    [Types.syncSelectedTeam]: (state) => ({...state, loadingTeamBacklog: true}),
    [Types.syncSelectedTeamSuccess]: (state, {teamBacklog, teamBacklogKeys}) => ({...state, loadingTeamBacklog:false, teamBacklog, teamBacklogKeys}),
    [Types.syncSelectedTeamSuccess]: (state, {error}) => ({...state, error}),

    [Types.selectTeamTask]: (state, {selectedTeamTask}) => ({...state, selectedTeamTask, loadingTeamTask: true}),
    [Types.selectTeamTaskSuccess]: (state, {teamTaskData}) => ({...state, teamTaskData, loadingTeamTask: false}),
    [Types.selectTeamError]: (state, {error}) => ({...state, error, loadingTeamTask: false, selectedTeamTask: INITIAL_STATE.selectedTeamTask})
};

export const Creators = {
    syncTeams: () => ({type: Types.syncTeams}),
    syncTeamsSuccess: (teams, teamKeys) => ({type:Types.syncTeamsSuccess, teams, teamKeys}),
    syncTeamsError: (error) => ({type: Types.syncTeamsError, error}),

    selectTeam: (selectedTeam) => ({type: Types.selectTeam, selectedTeam}),
    selectTeamSuccess: (teamBacklog, teamBacklogKeys) => ({type: Types.selectTeamSuccess, teamBacklog, teamBacklogKeys}),
    selectTeamError: (error) => ({type: Types.selectTeamError, error}),

    syncSelectedTeam: () => ({type: Types.syncSelectedTeam}),
    syncSelectedTeamSuccess: (teamBacklog, teamBacklogKeys) => ({type: Types.syncSelectedTeamSuccess, teamBacklog, teamBacklogKeys}),
    syncSelectedTeamError: (error) => ({type: Types.syncSelectedTeamError, error}),

    selectTeamTask: (selectedTeamTask) => ({type: Types.selectTeamTask, selectedTeamTask}),
    selectTeamTaskSuccess: (teamTaskData) => ({type: Types.selectTeamTaskSuccess, teamTaskData}),
    selectTeamTaskError: (error) => ({type: Types.selectTeamTaskError, error})
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Types.syncTeams:
            return Actions[Types.syncTeams](state);
        case Types.syncTeamsSuccess:
            return Actions[Types.syncTeamsSuccess](state, action);
        case Types.syncTeamsError:
            return Actions[Types.syncTeamsError](state, action);

        case Types.selectTeam:
            return Actions[Types.selectTeam](state, action);
        case Types.selectTeamSuccess:
            return Actions[Types.selectTeamSuccess](state, action);
        case Types.selectTeamError:
            return Actions[Types.selectTeamError](state, action);

        case Types.syncSelectedTeam:
            return Actions[Types.syncSelectedTeam](state);
        case Types.syncSelectedTeamSuccess:
            return Actions[Types.syncSelectedTeamSuccess](state, action);
        case Types.syncSelectedTeamError:
            return Actions[Types.syncSelectedTeamError](state, action);
    

        case Types.selectTeamTask:
            return Actions[Types.selectTeamTask](state, action);
        case Types.selectTeamTaskSuccess:
            return Actions[Types.selectTeamTaskSuccess](state, action);
        case Types.selectTeamTaskError:
            return Actions[Types.selectTeamTaskError](state, action);

        default:
            return state;
    }
}

export const get = {
    teams: state => state[PATH].teams,
    teamKeys: state => state[PATH].teamKeys,
    loadingTeams: state => state[PATH].loadingTeams,


    selectedTeam: state => state[PATH].selectedTeam,
    teamBacklog: state => state[PATH].teamBacklog,
    teamBacklogKeys: state => state[PATH].teamBacklogKeys,
    loadingTeamBacklog: state => state[PATH].loadingTeamBacklog,

    selectedTeamTask: state => state[PATH].selectedTeamTask,
    teamTaskData: state => state[PATH].teamTaskData
}