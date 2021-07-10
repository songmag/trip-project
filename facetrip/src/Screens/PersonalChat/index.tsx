import React from 'react';
import Styled from 'styled-components/native';

import MyMessageComponent from '~/Components/MyMessageComponent';
import OppMessageComponent from '~/Components/OppMessageComponent';

const Container = Styled.ScrollView`
  flex: 1;
`;

const PersonalChat = () => {
  return (
    <Container>
      <MyMessageComponent ChatContent={"안녕하안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요세요"}/>
      <OppMessageComponent ChatContent={"반갑습니다"}/>
      <MyMessageComponent ChatContent={"안녕하안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요세요"}/>
      <OppMessageComponent ChatContent={"반갑습니다"}/>
      <MyMessageComponent ChatContent={"안녕하안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요세요"}/>
      <OppMessageComponent ChatContent={"반갑습니다"}/>
      <MyMessageComponent ChatContent={"안녕하안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요세요"}/>
      <OppMessageComponent ChatContent={"반갑습니다"}/>
    </Container>
  );
};

export default PersonalChat;