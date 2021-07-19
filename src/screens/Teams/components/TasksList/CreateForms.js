import React, { useCallback } from 'react';
import { Modal, Forms } from '../../../../components';
import styled from 'styled-components';

import {AiFillCloseCircle} from 'react-icons/ai';

import CreateTask from '../../../../services/firebase/utils/CreateTask';
import {FORM_KEYS} from './constants.json';
import { useSelector } from 'react-redux';
import { get } from '../../redux/reducer';

function CreateForms({visible = null, onDismiss, onCreate}) {
    const selectedTeam = useSelector(get.selectedTeam);

    const handleSubmit = useCallback(async ({taskName = ''}) => {
        await CreateTask.CreateTask('MANAGER', taskName, selectedTeam, onCreate);
    },[onCreate, selectedTeam]);

    return visible ? (
        <Modal>
            <Container>
                <div className='create-forms-header'>
                    <div className='forms-title'>New team</div>
                    <div className='modal-dismiss-button' onClick={onDismiss}><AiFillCloseCircle /></div>
                </div>
                <Forms fieldKeys={FORM_KEYS} fieldValues={{}} onSubmit={handleSubmit} />
            </Container>
        </Modal>
    ) : null
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
    gap: 10px;

    .create-forms-header {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .forms-title {
        display: flex;
        width: 100%;
        text-align: center;
    }

    .modal-dismiss-button {
        display: flex;
        height: 30px;
        width: 30px;
        align-items: center;
        justify-content: center;
        font-size: 16px;

        color: #000;
        border-radius: 10px;
        cursor: pointer;

        :hover {
            background-color: #000;
            color: #fff;
        }
    }
`;

export default CreateForms;