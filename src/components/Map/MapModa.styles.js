import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    div {
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
    }
`;

export const Text = styled.div`
    font-size: 11px;
    color: #ffffff;
    &.active {
        font-size: 13px;
        font-weight: bold;
        margin: 5px 0;
    }
`