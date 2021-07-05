import React from 'react';
import Styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import Navigator from '~/Screens/Navigator';

const Container = Styled.SafeAreaView`
  flex: 1; */
`;

interface Props {}

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content"/>
      <Navigator/>
    </Container>
  );
};

export default App;