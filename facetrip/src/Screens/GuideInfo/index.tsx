import React, {useState, useRef, createRef} from 'react';
import Styled from 'styled-components/native';

import ImageSliderComponent from '~/Components/ImageSliderComponent';
import DescriptionComponent from '~/Components/DescriptionComponent';
import CheckboxComponent from '~/Components/CheckboxComponent';
import HomeStay from '~/Screens/HomeStay';
import { ScrollView } from 'react-native-gesture-handler';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 0 20px;
`;

const GuideInfo = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  let scrollRef = useRef<ScrollView>();

  const setCheck = () => {
    // 스크롤 변경 먼저 처리한 뒤에 해제
    if(!isChecked) {
      setIsChecked(!isChecked);
      setTimeout(() => {
        scrollToBottom();
      }, 100);
      // console.log("isSet");
      // 체크 한 뒤 스크롤 아래로
    } else {
      // 스크롤 위로 올린 뒤 체크 해제
      scrollToTop();
      setTimeout(() => {
        setIsChecked(!isChecked);
      }, 200);
    }
  }

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({y: 0, animated: true});
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollToEnd({animated: true});
  };

  return (
    <Container 
      bounces={false}
      ref={scrollRef}>
      <ImageSliderComponent message={"* 가이드 요청을 받기 위한 프로필입니다."}/>
      <DescriptionComponent title={"Name"} contents={"Gil Dong Hong"} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Country"} contents={"Seoul, Korea"} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Language"} contents={"Seoul, Korea"} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"pay"} contents={"$7 per day"} style={{flexDirection: "row", justifyContent: "space-between"}} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Description"} contents={"이곳은 소개를 하는 곳입니다"} titleStyle={{marginBottom: "3%"}}/>
      <CheckboxComponent checked={isChecked} onPress={setCheck}/>
      { isChecked ? 
          <HomeStay/> : 
          <Container/> }
    </Container>
  );
};

export default GuideInfo;