import React from 'react';
import Styled from 'styled-components/native';

import StayItemComponent from '~/Components/StayItemComponent';

const Container = Styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const StayListComponent = () => {
  return (
    <Container bounces={false}>
      <StayItemComponent/>
      <StayItemComponent/>
      <StayItemComponent/>
      <StayItemComponent/>
      <StayItemComponent/>
      <StayItemComponent/>
    </Container>
  );
};

export default StayListComponent;