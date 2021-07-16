import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1.5;
  width: 90%;
  border: 1px solid #7c7974;
  border-radius: 10px;
  padding: 0 10px;
  background-color: #f8f8f8;
  align-self: center;
  justify-content: space-around;
`;

const AreaText = Styled.Text`
  /* flex: 1; */
  color: #1f2c43;
`;

const LanguageText = Styled.Text`
  /* flex: 1; */
  color: #1f2c43;
`;

interface Props {
  selectedArea?: Array<string>;
  selectedLanguage?: string | undefined;
}

const FilterBoardComponent = ({selectedArea, selectedLanguage}: Props) => {

  const getSelectedArea = (selectedArea: Array<string>) => {
    let areaString = "선택된 지역 : ";

    if(selectedArea.length === 0) return areaString += "없습니다."
    else {
      for(var i=0;i<selectedArea.length;i++) {
        areaString += selectedArea[i] + " ";
      }
    } return areaString;
  }
  
  const getSelectedLanguage = (selectedLanguage: string) => {
    let defaultLanguage = "한국어";
    let languageString = "선택 된 언어 : ";
    
    if(selectedLanguage === undefined) languageString += defaultLanguage;
    else languageString += selectedLanguage;

    return selectedLanguage;
  }

  return (
    <Container>
      {/* <AreaText>{getSelectedArea}</AreaText> */}
      {/* <LanguageText>{getSelectedLanguage}</LanguageText> */}
      <AreaText>현재 선택된 지역: 없습니다</AreaText>
      <LanguageText>현재 선택된 언어: 없습니다</LanguageText>
    </Container>
  );
};

export default FilterBoardComponent;