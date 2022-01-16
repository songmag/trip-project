import styled from 'styled-components';


export const CssButton = styled.button`
    flex: 1;
    border: 1px solid skyblue; 
    background-color: rgba(0,0,0,0);
    color: skyblue;
    padding: 5px;
    border-radius : 5px;
    margin-left:-3px;
    height: 30px;
    font-size: 15px;
    :hover {
        color:white;
        background-color: skyblue;
        cursor: pointer;
        box-shadow : 2px 2px 2px 2px gray;
    }
`;