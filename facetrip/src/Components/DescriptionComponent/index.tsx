import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;
  padding: 5px 0px 5px 5px;
`;

const TitleText = Styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const ContentsText = Styled.Text`
`;

interface Props {
  title: string;
  contents?: string;
  style?: object;
  titleStyle?: object;
}

const DescriptionComponent = ({title, contents, style, titleStyle}: Props) => {
  return (
    <Container style={style}>
<<<<<<< HEAD
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
=======
      <TitleText style={titleStyle}>{title}</TitleText>
      <ContentsText>{contents}</ContentsText>
>>>>>>> rn
    </Container>
  );
};

export default DescriptionComponent;
// 수정각