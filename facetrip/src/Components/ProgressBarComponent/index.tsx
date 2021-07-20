import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex-direction: row;
  height: 20px;
  margin-bottom: 10px;
`;

const LanguageText = Styled.Text`
  flex : 1;
  height: 100%;
  padding-left: 5px;
  font-weight: bold;
`;

const TotalPercentageContainer = Styled.View`
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
  language: string;
  color: string;
  percentage: string;
}

const ProgressBarComponent = ({language, color, percentage}: Props) => {
  return (
    <Container>
      <LanguageText>{language}</LanguageText>
      <TotalPercentageContainer>
        <PercentageContainer style={{width: percentage, backgroundColor: color}}/>
      </TotalPercentageContainer>
    </Container>
  );
};

export default ProgressBarComponent;