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
      <DescriptionComponent title={"Available Person"} contents={"4"} style={{flexDirection: "row", justifyContent: "space-between"}}/>
      <DescriptionComponent title={"Pay"} contents={"$7 per day"} style={{flexDirection: "row", justifyContent: "space-between"}}/>
      <DescriptionComponent title={"Breakfast"} style={{flexDirection: "row", justifyContent: "space-between"}}/>
      <DescriptionComponent title={"Wifi"} style={{flexDirection: "row", justifyContent: "space-between"}}/>
      <DescriptionComponent title={"Description"} contents={"홈스테이에 대해 소개해주세요"}/>
    </Container>
  );
};

export default HomeStay;