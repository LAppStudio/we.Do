import React, { Fragment, useCallback, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Creators, get} from '../../redux/reducer';

import Item from './Item';
import SectionList from '../SectionList';
import CreateForms from './CreateForms';

import {ITEM_SIZE} from './constants.json';

function TasksList() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal((old) => !old);

    const tasks = useSelector(get.teamBacklog);

    const handleSync = useCallback(() => {
        dispatch(Creators.syncSelectedTeam());
    },[dispatch])

    console.log('tasks', tasks);

    return (
        <Fragment>
            <CreateForms onCreate={handleSync} onDismiss={toggleModal} visible={showModal} />
            <SectionList title="Team's Tasks" data={tasks} renderItem={Item} itemSize={ITEM_SIZE} onAdd={toggleModal} />
        </Fragment>
    )
}

export default TasksList;