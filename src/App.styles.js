import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(230, 230, 255, 0.3);
    padding: 20px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
`;

export const OverallContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 500px;
    background-color: #ffffff;
    margin: 30px 20px;
`