import React from 'react';
import Styled from 'styled-components/native';
import { Image } from 'react-native';

import HeaderComponent from '~/Components/HeaderComponent';

const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

const Home = () => {
  return (
    <Container>
      <HeaderComponent imagePath={require('~/Assets/Images/logoReplacement.png')} headerTitle={"로고 위치"}/>
    </Container>
  );
};

export default Home;