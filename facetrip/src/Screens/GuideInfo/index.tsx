import React, {useState} from 'react';
import Styled from 'styled-components/native';

import ImageSliderComponent from '~/Components/ImageSliderComponent';
import DescriptionComponent from '~/Components/DescriptionComponent';
import CheckboxComponent from '~/Components/CheckboxComponent';
import HomeStay from '~/Screens/HomeStay';

const Container = Styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

const GuideInfo = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const setCheck = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Container bounces={false} onContentSizeChange={() => {
      console.log("여기에 스크롤 위치 조정 함수 설정")
    }}>
      <ImageSliderComponent message={"* 가이드 요청을 받기 위한 프로필입니다."}/>
      <DescriptionComponent title={"Name"} contents={"Gil Dong Hong"}/>
      <DescriptionComponent title={"Country"} contents={"Seoul, Korea"}/>
      <DescriptionComponent title={"Language"} contents={"Seoul, Korea"}/>
      <DescriptionComponent title={"pay"} contents={"$7 per day"} style={{flexDirection: "row", justifyContent: "space-between"}}/>
      <DescriptionComponent title={"Description"} contents={"이곳은 소개를 하는 곳입니다"}/>
      <CheckboxComponent checked={isChecked} onPress={setCheck}/>
      { isChecked ? 
          <HomeStay/> : 
          <Container></Container> }
    </Container>
  );
};

export default GuideInfo;