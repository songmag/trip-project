import React, {useState} from 'react';
import Styled from 'styled-components/native';
import {Image} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';

const Container = Styled.View`
  flex-direction: row;

  width: 100%;
  height: 80px;
`;

const HeaderText = Styled.Text`
  flex: 2;
  
  align-self: center;
  font-size: 30px;
  font-weight: bold;
`;

const ToggleSwitchContainer = Styled.View`
  flex: 1.5;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
`;

interface Props {
  setSegment: (idx: number) => void;
}

const InfoHeaderComponent = ({setSegment}: Props) => {
  const [selectSegmentIdx, setSelectSegmentIdx] = useState<number>(0);

  return (
    <Container>
      <Image 
        source={require('~/Assets/Images/identity.png')}
        style={{flex: 1, width: "100%", height: "100%", resizeMode: "contain"}}/>
      <HeaderText>Me</HeaderText>
      <ToggleSwitchContainer>
        <SegmentedControl
          values={["User","Guide"]}
          selectedIndex={selectSegmentIdx}
          onChange={(event) => {
            setSegment(event.nativeEvent.selectedSegmentIndex);
            }}
        />
      </ToggleSwitchContainer>
    </Container>
  );
};

export default InfoHeaderComponent;