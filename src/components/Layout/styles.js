import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;

    .side-nav {
        display: flex;
        height: 100%;
    }

    .main-content {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: row;
    }
`;