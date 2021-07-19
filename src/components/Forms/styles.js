import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    gap: 5px;

    .field-row {
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-content: flex-start;
    }
`;