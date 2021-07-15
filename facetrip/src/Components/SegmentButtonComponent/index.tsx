import React from 'react';
import Styled from 'styled-components/native';
import SegmentedControl from '@react-native-community/segmented-control';

const Container = Styled.View`
  flex: 1.5;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
`;

interface Props {
  setSegmentIdx: (idx:number) => void; // 선택 세그먼트 번호를 바꾸는 setState 함수
  selectedSegment: number; // 현재 선택된 세그먼트 번호
  segmentList: Array<string>; // 세그먼트 버튼에 들어갈 내용들을 담은 배열
}

const SegmentButtonComponent = ({setSegmentIdx,selectedSegment, segmentList}: Props) => {

  return (
    <Container>
      <SegmentedControl
        values={segmentList}
        selectedIndex={selectedSegment}
        onChange={(event) => {
          setSegmentIdx(event.nativeEvent.selectedSegmentIndex);
        }}
      />
    </Container>
  );
};

export default SegmentButtonComponent;