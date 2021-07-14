import React from 'react';
import Styled from 'styled-components/native';

import ImageSliderComponent from '~/Components/ImageSliderComponent';
import DescriptionComponent from '~/Components/DescriptionComponent';

const Container = Styled.View`
  flex: 1;

  padding: 0 20px;
`;

const UserInfo = () => {
  return (
    <Container>
      <ImageSliderComponent message={"* 가이드에 요청을 보냈을 때 보여지는 프로필입니다."}/>
      <DescriptionComponent title={"Name"} contents={"Gil Dong Hong"}/>
      <DescriptionComponent title={"Country"} contents={"Seoul, Korea"}/>
      <DescriptionComponent title={"Language"} contents={"Seoul, Korea"}/>
    </Container>
  );
};

export default UserInfo;