import React from 'react';
import Styled from 'styled-components/native';

import {Image} from 'react-native';

const Container = Styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  height: 100px;

  align-self: center;
  margin-bottom: 10px;
  
  border: 1px solid black;
  border-radius: 20px;
`;

const ImageContainer = Styled.View`
  width: 30%;
  height: 100%;
  padding: 10px;
`;

const InfoContainer = Styled.View`
  flex: 1;
  height: 100%;
  padding: 10px;
  border-left-width: 1px;
  border-left-color: black;
`;

const NameText = Styled.Text`
  margin-bottom: 10px;
  height: 20px;
  font-weight: bold;
`;

const LastTalkText = Styled.Text`
  flex: 1;
`;

interface Props {
  color?: string
}

const ChattingShowComponent = ({color}: Props) => {
  return (
    <Container onPress={() => {
      console.log("click");
    }} style={{backgroundColor: "white"}}>
      <ImageContainer>
        <Image source={require("~/Assets/Images/JJangu.png")} style={{flex: 1, width: "100%", height: "100%", resizeMode: "contain"}}/>
      </ImageContainer>
      <InfoContainer>
        <NameText>짱구</NameText>
        <LastTalkText style={{ overflow: "hidden"}}>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</LastTalkText>
      </InfoContainer>
    </Container>
  );
};

export default ChattingShowComponent;