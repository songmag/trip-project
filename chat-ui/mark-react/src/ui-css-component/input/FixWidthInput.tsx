import styled from 'styled-components';


export const FixWidthInput = styled.input`
    flex: 8;
    height: 30px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    margin-right : 15px;
    background-color: rgb(233, 233, 233);
    word-break:break-word;
    :focus {
        box-shadow : 2px 2px 2px 2px gray;
    }
`;