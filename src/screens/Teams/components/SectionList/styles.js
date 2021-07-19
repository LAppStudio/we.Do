import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 97%;
    background-color: #f3f3f3;
    padding: 10px;
    overflow: hidden;

    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;

    .card-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .card-title {
        display: flex;
        font-size: 15px;
        flex: 1;
        text-align: left;
        font-weight: bold;
    }

    .card-top-actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .card-action {
            display: flex;
            height: 26px;
            width: 26px;
            font-size: 25px;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            color: #000;
            cursor: pointer;

            transition: .2s background;
            transition: .2s color;

            :hover {
                background-color: #aaaaaa;
                color: #fff;
            }
        }
    }

    .card-list {
        flex: 1;
        width: 100%;
    }
`;