import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 2;
  height: 100%;
  background-color: #e2e2e2;
  border-radius: 10px;  
`;

const PercentageContainer = Styled.View`
  height: 100%;
  border-radius: 10px;
`;

interface Props {
  color: string;
  percentage: string;
}

const ProgressBarComponent = ({color, percentage}: Props) => {
  return (
    <Container>
      <PercentageContainer style={{width: percentage, backgroundColor: color}}/>
    </Container>
  );
};

export default ProgressBarComponent;