import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ListItem} from '../../../../components';
import { get, Creators } from '../../redux/reducer';

import {ITEM_SIZE} from './constants.json';

function Item({item}) {
    const dispatch = useDispatch();
    const selectedTask = useSelector(get.selectedTeamTask);
    const {id} = item; 
    const selected = selectedTask === id;

    const handlePress = useCallback(
        () => {
            dispatch(Creators.selectTeamTask(id))
        },
        [dispatch],
    );

    return (<ListItem type='task' onClick={handlePress}  size={ITEM_SIZE} {...{selected}} {...item} />)   
}

export default Item