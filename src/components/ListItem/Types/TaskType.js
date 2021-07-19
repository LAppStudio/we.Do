import React from 'react';

import styled from 'styled-components';

function TaskType({title = '', onClick, size:height = 60, selected = false}) {
    return(
        <Container {...{onClick, height, selected}}>
            <Main>
                <div className='task-item-title'>
                    {title}
                </div>
            </Main>
            <Secondary></Secondary>
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

    .task-item-title {
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
`;

export default TaskType;