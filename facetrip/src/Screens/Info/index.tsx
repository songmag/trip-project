import React, {useState} from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent';
import UserInfo from '~/Screens/UserInfo';
import GuideInfo from '~/Screens/GuideInfo';

const Container = Styled.View`
  flex: 1;
  background-color: white;

`;

const Info = () => {
  const [selectSegmentIdx, setSelectSegmentIdx] = useState<number>(0);
  const segmentList: Array<string> = ["User", "Guide"];

  const setSegmentIdx = (idx: number) => {
    setSelectSegmentIdx(idx);
  };

  return (
    <Container>
      <HeaderComponent imagePath={require('~/Assets/Images/identity.png')} headerTitle={"Me"} segmentList={segmentList} selectedSegmentIdx={selectSegmentIdx} setSegmentIdx={setSegmentIdx}/>
      {selectSegmentIdx === 0 ? <UserInfo/> : <GuideInfo/>}
    </Container>
  );
};

export default Info;