import React from 'react';
import Styled from 'styled-components/native';
import { Image } from 'react-native';

const Container = Styled.View`
  flex: 1;
`;

const LogoContainer = Styled.View`
  width: 100%;
  height: 80px;
  background-color: #f1d475;
`;

const LogoImage = Styled.Image``

const Home = () => {
  return (
    <Container>
      <LogoContainer>
        {/* <LogoImage source={require('~/Assets/Images/language.png')}/> */}
        {/* 로고 들어갈 자리 */}
      </LogoContainer>
    </Container>
  );
};

export default Home;