import React from 'react';
import Styled from 'styled-components/native';
import {Image} from 'react-native';

import DescriptionComponent from '~/Components/DescriptionComponent';

const Container = Styled.TouchableOpacity`
  flex-direction: row;

  width: 90%;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #f8f8f8;
  align-self: center;
  margin: 5px;
`;

const DescriptionContainer = Styled.View`
  flex: 2;
  height: 100%;
  /* background-color: green; */
`;

interface Props {
  pushToShowGuide: () => void;
}

const StayItemComponent = ({pushToShowGuide}: Props) => {
  return (
    <Container onPress={pushToShowGuide}>
      <Image source={require('~/Assets/Images/host2.png')} style={{flex: 1, width: "100%", height: "50%", resizeMode: "contain", justifyContent: "center", alignSelf: "center"}}/>
      <DescriptionContainer>
        <DescriptionComponent title={"Name"} style={{flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between", }} contents={"짱구"}/>
        <DescriptionComponent title={"Country"} style={{flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between", }} contents={"Korea"}/>
        <DescriptionComponent title={"Languages"} style={{flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between", }} contents={"Korean"}/>
        <DescriptionComponent title={"Payment"} style={{flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between", }} contents={"$7 per day"}/>
        <DescriptionComponent title={"HomeStay"} style={{flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between", }} contents={"X"}/>
      </DescriptionContainer>
    </Container>
  );
};

export default StayItemComponent;