import styled, {StyledInterface} from 'styled-components';
import React from 'react';


export const Box = styled.div`
    background-color : white;
    flex: 9;
    overflow:hidden;
`;

export const RightDiv = styled.div`
    display:flex;
    justify-content: end;
`;
export const LeftDiv = styled.div`
    display:flex;
    justify-content: start;
`;

export const BoxElement = styled.div`
    color: white;
    margin-top : 10px;
    display: inline-block;
`;

export const FormBox = styled.div`
    flex:1;
    display:flex;
`;

export const ChatElementBox = styled(BoxElement)`
    background-color : green;
    padding-top : 5px;
    padding-bottom : 5px;
    padding-left : 5px;
    padding-right : 5px;
    word-break:break-word;
    max-width : 300px;
`;

export const CenterBox = styled.div`
    margin : 0;
    display : flex;
    flex:1;
    flex-direction : column;
    justify-content: center;
    max-width : 500px;
    min-width : 100x;
    min-height : 500px;
`;