import React from 'react';

import styled from 'styled-components';

function Button({onClick, title}) {
    return(
        <Container {...{onClick}}>
            <div className='button-title'>{title}</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #000;
    border-radius: 10px;

    cursor: pointer;

    .button-title {
        display: flex;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }
`;

export default Button;