import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;
  padding: 5px 0px 5px 5px;
`;

const TitleText = Styled.Text`
  font-size: 15px;
  font-weight: bold;
  /* padding: 5px 0; */
`;

const ContentsText = Styled.Text`
  /* padding: 5px 0; */
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
      <TitleText style={titleStyle}>{title}</TitleText>
      <ContentsText>{contents}</ContentsText>
    </Container>
  );
};

export default DescriptionComponent;