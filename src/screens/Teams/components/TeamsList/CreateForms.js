import React, { useCallback } from 'react';
import { Modal, Forms } from '../../../../components';
import styled from 'styled-components';

import {AiFillCloseCircle} from 'react-icons/ai';

import {FORM_KEYS} from './constants.json';
import CreateTeam from '../../../../services/firebase/utils/CreateTeam';

function CreateTeams({visible = null, onDismiss, onCreate}) {

    
    const handleSubmit = useCallback(async ({name = '', manager = ''}) => {
        await CreateTeam.Create(name, manager, onCreate);
    },[onCreate]);

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

export default CreateTeams;