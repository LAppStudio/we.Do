import React from 'react';
import {useSelector} from 'react-redux';

import {get} from '../../redux/reducer';

import {Forms} from '../../../../components';

import {Container} from './styles';

function TaskInfo() {
    const selectedTeamTaskId = useSelector(get.selectedTeamTask);
    const teamTasks = useSelector(get.teamBacklogKeys);
    const backlog = useSelector(get.teamBacklog);

    const data = backlog[teamTasks[selectedTeamTaskId]] ?? {};

    const {title = ''} = data;
    console.log('data', data);

    return(
        <Container>
            <div className='task-info-title'>{title}</div>
            <Forms fieldValues={data} fieldKeys={[{key: 'title', type: 'text'}, {key: 'notes', type: 'text'}]} />
        </Container>
    )
}

export default TaskInfo;