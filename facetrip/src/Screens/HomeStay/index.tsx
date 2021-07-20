import React from 'react';
import Styled from 'styled-components/native';

import ImageSliderComponent from '~/Components/ImageSliderComponent';
import DescriptionComponent from '~/Components/DescriptionComponent';

const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

const HomeStay = () => {
  return (
    <Container>
      <ImageSliderComponent message={"Location"}/>
      <DescriptionComponent title={"Available Person"} contents={"4"} style={{flexDirection: "row", justifyContent: "space-between"}} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Pay"} contents={"$7 per day"} style={{flexDirection: "row", justifyContent: "space-between"}} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Breakfast"} style={{flexDirection: "row", justifyContent: "space-between"}} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Wifi"} style={{flexDirection: "row", justifyContent: "space-between"}} titleStyle={{marginBottom: "3%"}}/>
      <DescriptionComponent title={"Description"} contents={"홈스테이에 대해 소개해주세요"} titleStyle={{marginBottom: "3%"}}/>
    </Container>
  );
};

export default HomeStay;