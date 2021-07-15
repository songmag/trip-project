import React from 'react';
import { Keyboard } from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import SeachBarComponent from '~/Components/SearchBarComponent';
import ChattingShowComponent from '~/Components/ChattShowComponent';
// import { NavigationProp } from '@react-navigation/native';

const KeyContainer = Styled.TouchableWithoutFeedback`
  flex: 1;
`;

const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

const ChatContainer = Styled.ScrollView`
  flex: 1;
`;

type NavigationProp = StackNavigationProp<ChattingNaviParam,'PersonalChat'>

interface Props {
  navigation: NavigationProp;
}

const Chat = ({navigation}: Props) => {
  return (
    <KeyContainer onPress={Keyboard.dismiss}> 
    {/* 바탕을 클릭할 시 키보드 사라지도록 처리 */}
      <Container>
      <SeachBarComponent/>
      <ChatContainer>
        <ChattingShowComponent navigation={navigation} color={"red"}/>
        <ChattingShowComponent navigation={navigation} color={"blue"}/>
        <ChattingShowComponent navigation={navigation} color={"yellow"}/>
        <ChattingShowComponent navigation={navigation} color={"red"}/>
        <ChattingShowComponent navigation={navigation} color={"red"}/>
        <ChattingShowComponent navigation={navigation} color={"blue"}/>
        <ChattingShowComponent navigation={navigation} color={"yellow"}/>
        <ChattingShowComponent navigation={navigation} color={"red"}/>
        <ChattingShowComponent navigation={navigation} color={"red"}/>
        <ChattingShowComponent navigation={navigation} color={"blue"}/>
        <ChattingShowComponent navigation={navigation} color={"yellow"}/>
        <ChattingShowComponent navigation={navigation} color={"red"}/>
      </ChatContainer>
      </Container>
    </KeyContainer>
  );
};

export default Chat;