import React from 'react';
import Styled from 'styled-components/native';
import {Image, ImageSourcePropType} from 'react-native';
import SegmentButtonComponent from '../SegmentButtonComponent';

const Container = Styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
`;

const HeaderText = Styled.Text`
  flex: 2;

  align-self: center;
  font-size: 25px;
  font-weight: bold;
`;

const ToggleSwitchContainer = Styled.View`
  flex: 1.5;
  height: 100%;
`;

interface Props {
  imagePath: ImageSourcePropType; // imageSoure를 받아오기 위한 타입
  headerTitle?: string;
  segmentList?: Array<string>;
  selectedSegmentIdx?: number | undefined;
  setSegmentIdx?: (idx: number) => void;
}

const HeaderComponent = ({imagePath, headerTitle, segmentList, selectedSegmentIdx, setSegmentIdx}: Props) => {
  return (
    <Container>
      <Image source={imagePath} style={{flex: 1, width: "100%", height: "100%", resizeMode: "contain"}}/>
      <HeaderText>{headerTitle}</HeaderText>
      {segmentList !== undefined && setSegmentIdx !== undefined && selectedSegmentIdx !== undefined ?
          <SegmentButtonComponent setSegmentIdx={setSegmentIdx} segmentList={segmentList} selectedSegment={selectedSegmentIdx}/>
          :
          <ToggleSwitchContainer/>
      }
    </Container>
  );
};

export default HeaderComponent;