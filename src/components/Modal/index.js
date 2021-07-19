import React from 'react';

import styled from 'styled-components';

function Modal({children}) {
    return(
        <Backdrop>
            <ModalCard>
                {children}
            </ModalCard>
        </Backdrop>
    )
}

const Backdrop = styled.div`
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.4);

    height: 100%;
    width: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 500;
`;

const ModalCard = styled.div`
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;

    background-color: #fff;
    border-radius: 10px;

    z-index: 501;
`;

export default Modal;