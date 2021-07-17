import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: red;
`;

const StayListComponent = () => {
  return (
    <Container></Container>
  );
};

export default StayListComponent;