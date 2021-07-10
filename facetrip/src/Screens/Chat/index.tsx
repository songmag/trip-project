import React from 'react';
import { Keyboard, ScrollView } from 'react-native';
import Styled from 'styled-components/native';

import SeachBar from '~/Components/SearchBarComponent';
import ChattingShowComponent from '~/Components/ChattShowComponent';

const KeyContainer = Styled.TouchableWithoutFeedback`
  flex: 1;
`;

const Container = Styled.ScrollView`
  flex: 1;
`;

const Chat = () => {
  return (
    <KeyContainer onPress={Keyboard.dismiss}> 
    {/* 바탕을 클릭할 시 키보드 사라지도록 처리 */}
      <>
      <SeachBar/>
      <Container>
        <ChattingShowComponent color={"red"}/>
        <ChattingShowComponent color={"blue"}/>
        <ChattingShowComponent color={"yellow"}/>
        <ChattingShowComponent color={"red"}/>
        <ChattingShowComponent color={"blue"}/>
        <ChattingShowComponent color={"yellow"}/>
        <ChattingShowComponent color={"red"}/>
        <ChattingShowComponent color={"blue"}/>
        <ChattingShowComponent color={"yellow"}/>
        <ChattingShowComponent color={"red"}/>
        <ChattingShowComponent color={"blue"}/>
      </Container>
      </>
    </KeyContainer>
  );
};

export default Chat;