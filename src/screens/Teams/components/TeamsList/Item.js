import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ListItem} from '../../../../components';
import { get, Creators } from '../../redux/reducer';

import {ITEM_SIZE} from './constants.json';

function Item({item}) {
    const dispatch = useDispatch();
    const selectedTeam = useSelector(get.selectedTeam);
    const {id} = item; 
    const selected = selectedTeam === id;

    const handlePress = useCallback(
        () => {
            dispatch(Creators.selectTeam(!selected ? id : null))
        },
        [dispatch, selected],
    );

    return (<ListItem type='team' onClick={handlePress}  size={ITEM_SIZE} {...{selected}} {...item} />)   
}

export default Item