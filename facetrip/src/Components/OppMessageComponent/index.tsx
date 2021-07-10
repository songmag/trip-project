import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;

  margin: 5px 0;
  /* padding-top: 10px; */
  padding-left: 10px;
`;

const TextContainer = Styled.View`
  width: 60%;
  /* height: 100%; */

  align-self: flex-start;
  justify-content: center;
  padding: 10px;

  border-radius: 10px;
  background-color: #ffe78c;
`;

const ChatText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

interface Props {
  ChatContent: string;
}

const OppMessageComponent = ({ChatContent}: Props) => {
  return (
    <Container>
      <TextContainer>
        <ChatText>{ChatContent}</ChatText>
      </TextContainer>
    </Container>
  );
};

export default OppMessageComponent;