import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: 200px;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 20px 30px;
`;

export const GraphContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`