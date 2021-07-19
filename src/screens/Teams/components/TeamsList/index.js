import React, { Fragment, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Creators, get} from '../../redux/reducer';

import SectionList from '../SectionList';
import Item from './Item';

import {ITEM_SIZE} from './constants.json';
import CreateTeams from './CreateForms';


function TeamsList() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleSync = useCallback(() => {
        dispatch(Creators.syncTeams());
    },[dispatch])

    const toggleModal = () => setShowModal(old => !old);

    const teams = useSelector(get.teams);

    return(
        <Fragment>
            <CreateTeams visible={showModal} onDismiss={toggleModal} onCreate={handleSync} />
            <SectionList title='Teams' renderItem={Item} data={teams} itemSize={ITEM_SIZE} onAdd={toggleModal} />
        </Fragment>
    )

};

export default TeamsList;