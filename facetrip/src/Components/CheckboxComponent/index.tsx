import React from 'react';
import Styled from 'styled-components/native';
import {Image} from 'react-native';

const Container = Styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;

  padding-left: 5px;
  justify-content: space-between;
`;

const CheckboxContainer = Styled.TouchableOpacity`
  width: 30px;
  /* height: 100%; */
`;

const CheckboxDescription = Styled.Text`
  align-self: center;
  font-size: 15px;
  font-weight: bold;
`;

interface Props {
  checked: boolean;
  onPress: () => void;
}

const CheckboxComponent = ({checked, onPress}: Props) => {
  return (
    <Container>
      <CheckboxContainer onPress={onPress}>
        <Image 
          source={
            checked ? 
              require('~/Assets/Images/check.png') :
              require('~/Assets/Images/uncheck.png')
          }
          style={{flex: 1, width: "100%", height: "100%"}}/>
      </CheckboxContainer>
        <CheckboxDescription>Home Stay</CheckboxDescription>
    </Container>
  );
};

export default CheckboxComponent;