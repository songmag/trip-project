import React from 'react';
import Styled from 'styled-components/native';

import ProgressBarComponent from '~/Components/ProgressBarComponent';

const Container = Styled.View`
  width: 100%;
  padding: 5px 0px 5px 5px;
`;

const TitleText = Styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0;
`;

const ContentsText = Styled.Text`
  padding: 5px 0;
`;

const LanguageContainer = Styled.View``;

const UserLanguages = Styled.View`
  flex-direction: row;
  height: 30px;
  padding: 5px 0;
`;

const UserLanguageText = Styled.Text`
  flex: 1;
  font-size: 15px;
`;

interface Props {
  title: string;
  contents?: string;
  pay?: string;
  style?: object;
}

const DescriptionComponent = ({title, contents, style}: Props) => {
  return (
    <Container style={style}>
      <TitleText>{title}</TitleText>
      {/* <ContentsText>{contents}</ContentsText> */}
      {title !== "Language" ? 
        // <ContentsText style={style}>{contents}</ContentsText> 
        <ContentsText>{contents}</ContentsText>
        : 
        <LanguageContainer>
          <UserLanguages>
            <UserLanguageText>Korean</UserLanguageText>
            <ProgressBarComponent color={"#91ed71"} percentage={"75%"}/>
          </UserLanguages>
          <UserLanguages>
            <UserLanguageText>English</UserLanguageText>
            <ProgressBarComponent color={"#91ed71"} percentage={"40%"}/>
          </UserLanguages>
          <UserLanguages>
            <UserLanguageText>Chinese</UserLanguageText>
            <ProgressBarComponent color={"#91ed71"} percentage={"90%"}/>
          </UserLanguages>
        </LanguageContainer>
      }
    </Container>
  );
};

export default DescriptionComponent;