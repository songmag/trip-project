import React from 'react';
import Styled from 'styled-components/native';

import ImageSliderComponent from '~/Components/ImageSliderComponent';
import DescriptionComponent from '~/Components/DescriptionComponent';
import ProgressBarComponent from '~/Components/ProgressBarComponent';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const DescriptionContainer = Styled.View`
  width: 90%;
  align-self: center;
`;

const PercentContainer = Styled.View`
  width: 100%;
`;

const HomeStayButton = Styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background-color: #20a1d8;
  border-radius: 10px;

  align-self: center;
  justify-content: center;
  align-items: center;
`;

const HomeStayButtonText = Styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: white;
`;

const ShowGuide = () => {
  return (
    <Container bounces={false}>
      <ImageSliderComponent/>
      <DescriptionContainer>

        <DescriptionComponent title={"Name"} contents={"홍길동"} titleStyle={{marginBottom: "3%"}}/>
        <DescriptionComponent title={"Country"} contents={"Korea, Seoul, BaekSuk"} titleStyle={{marginBottom: "3%"}}/>
        <DescriptionComponent title={"Languages"}/>

        <PercentContainer>
          <ProgressBarComponent language={"한국어"} color={"#99ff5e"} percentage={"60%"}/>
          <ProgressBarComponent language={"영어"} color={"#99ff5e"} percentage={"30%"}/>
          <ProgressBarComponent language={"중국어"} color={"#99ff5e"} percentage={"70%"}/>
        </PercentContainer>

        <DescriptionComponent title={"pay"} contents={"$7 per day"} style={{flexDirection: "row", justifyContent: "space-between", marginBottom: "3%"}}/>
        <DescriptionComponent title={"가이드 가능한 범위"}/>
        <DescriptionComponent title={"Introduction"} style={{marginBottom: "3%"}}/>
      </DescriptionContainer>
      <HomeStayButton>
        <HomeStayButtonText>
          HomeStay
        </HomeStayButtonText>
      </HomeStayButton>
    </Container>
  );
};

export default ShowGuide;