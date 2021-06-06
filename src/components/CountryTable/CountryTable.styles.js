import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    height: 500px;
    background-color: #ffffff;
    border-radius: 20px;
    margin: 0 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Table = styled.table`
    width: 80%;
    margin: 20px 0;
    tbody, thead {
        width: 80%;
    }
    tbody {
        th {
            width: 20%;
            height: 35px;
            > img {
                width: 20px;
                margin-right: 15px;
            }
        }
        tr {
            &:nth-child(odd) {
                background-color: #f0f0f5;
            }
            &:hover {
                background-color: rgb(0, 0, 0, 0.3)
            }
        }
    }
`