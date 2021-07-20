import React from 'react';
import Styled from 'styled-components/native';

import ImageSliderComponent from '~/Components/ImageSliderComponent';
import DescriptionComponent from '~/Components/DescriptionComponent';
import ProgressBarComponent from '~/Components/ProgressBarComponent';

const Container = Styled.View`
  flex: 1;

  padding: 0 20px;
`;

const PercentContainer = Styled.View`
`;

const UserInfo = () => {
  return (
    <Container>
      <ImageSliderComponent message={"* 가이드에 요청을 보냈을 때 보여지는 프로필입니다."}/>
      <DescriptionComponent title={"Name"} contents={"Gil Dong Hong"} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Country"} contents={"Seoul, Korea"} titleStyle={{marginBottom: "3%"}}/>
      {/* <DescriptionComponent title={"Language"} contents={"Seoul, Korea"}/> */}
      <DescriptionComponent title={"Language"}/>
      <PercentContainer>
        <ProgressBarComponent language={"한국어"} color={"#99ff5e"} percentage={"60%"}/>
        <ProgressBarComponent language={"영어"} color={"#99ff5e"} percentage={"30%"}/>
        <ProgressBarComponent language={"중국어"} color={"#99ff5e"} percentage={"70%"}/>
      </PercentContainer>
    </Container>
  );
};

export default UserInfo;