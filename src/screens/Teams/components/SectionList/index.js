import React from 'react';

import {List} from '../../../../components';

import {AiOutlinePlusCircle} from 'react-icons/ai';

import {Container} from './styles';

function TeamsList({data, renderItem, itemSize, title = '', onAdd}) {
    return(
        <Container>
            <div className='card-header'>
                <div className='card-title'>{title}</div>
                <div className='card-top-actions'>
                    <div className='card-action' onClick={onAdd}>
                        <AiOutlinePlusCircle />
                    </div>
                </div>
            </div>
            <div className='card-list'>
                <List {...{data, renderItem}} itemSize={itemSize + 30} type='fixed' />
            </div>
        </Container>
    )
};

export default TeamsList;