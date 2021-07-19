import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    gap: 10px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .task-info-title {
        width: 100%;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
    }
`;