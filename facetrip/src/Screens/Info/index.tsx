import React, {useState} from 'react';
import Styled from 'styled-components/native';

import InfoHeaderComponent from '~/Components/InfoHeaderComponent';
import UserInfo from '~/Screens/UserInfo';
import GuideInfo from '~/Screens/GuideInfo';

const Container = Styled.View`
  flex: 1;
  background-color: white;

`;

const Info = () => {
  const [selectSegmentIdx, setSelectSegmentIdx] = useState<number>(0);

  const getSegmentIdx = (idx: number) => {
    setSelectSegmentIdx(idx);
  };

  return (
    <Container>
      <InfoHeaderComponent setSegment={getSegmentIdx}/>
      {selectSegmentIdx === 0 ? <UserInfo/> : <GuideInfo/>}
    </Container>
  );
};

export default Info;