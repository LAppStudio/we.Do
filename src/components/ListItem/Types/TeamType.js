import React from 'react';

import {AiOutlineTeam, AiOutlineFileDone} from 'react-icons/ai';

import styled from 'styled-components';

const TeamQuantity = ({qty = 0}) => (
    <div className='secondary-info-item'>
        <AiOutlineTeam />
        {qty}
    </div>
)

const TasksCount = ({total = 0, done = 0}) => (
    <div className='secondary-info-item'>
        <AiOutlineFileDone />
        {`${done} / ${total}`}
    </div>
)

function TeamType({title = '', qty = 0,tasks_qty: totalTasks,completed_tasks: completedTasks,    onClick, size:height = 60, selected = false}) {
    return(
        <Container {...{onClick, height, selected}}>
            <Main>
                <div className='team-item-title'>
                    {title}
                </div>
            </Main>
            <Secondary>
                <TeamQuantity {...{qty}} />
                <TasksCount total={totalTasks} done={completedTasks} />
            </Secondary>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: ${({height}) => height}px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;

    border: 1px solid ${({selected}) => selected ? '#000' : 'transparent'};

    cursor: pointer;

    :hover {
        background-color: #c8c8c8;
    }
`;

const Main = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .team-item-title {
        font-size: 12px;
        font-weight: bold;
        div-align: left;
        width: 100%;
    }
`;

const Secondary = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    .secondary-info-item {
        display: flex;
        flex-direction: row;
        gap: 3px;
        border-radius: 5px;
        background-color: #c8c8c8;
        padding: 2px 5px;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
    }
`;

export default TeamType;