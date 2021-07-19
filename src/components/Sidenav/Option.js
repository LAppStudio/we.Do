import React from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

function Option({title = '', onClick, children, path}) {
    const {pathname} = useLocation();
    const selected = path === pathname;
    return(
        <Container {...{onClick, selected}}>
            {children}
            <Title>{title}</Title>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    height: 60px;
    width: 60px;

    :hover {
        background-color: #fff;
    }

    border: 1px solid ${({selected = false}) => selected ? '#000' : 'transparent'};
    border-radius: 10px;

    cursor: pointer;
`;

const Title = styled.div`
    text-align: center;
    font-size: 8px;
    font-weight: bold;
`;

export default Option;