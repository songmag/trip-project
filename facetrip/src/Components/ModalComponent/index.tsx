import React from 'react';
import Styled from 'styled-components/native';

import ModalItemComponet from '~/Components/ModalItemComponent';

const Container = Styled.SafeAreaView`
  width: 100%;
  height: 100%;

  background-color: #f8f8f8;
`;

const ModalDescriptionText = Styled.Text`

  padding: 10px 0;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const ListContainer = Styled.ScrollView``;

const RegisterButton = Styled.TouchableOpacity`
  width: 80%;
  height: 50px;

  background-color: #99cddf;

  border: 1px solid #99cddf;
  border-radius: 10px;

  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
const RegisterText = Styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

const CancelButton = Styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  
  background-color: #99cddf;

  border: 1px solid #99cddf;
  border-radius: 10px;

  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const CancelText = Styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

interface Props {
  modalTitle: string;
  closeModal: () => void;
}

const ModalComponent = ({modalTitle, closeModal}: Props) => {
  return (
    <Container>
      <ModalDescriptionText>{modalTitle}</ModalDescriptionText>
      <ListContainer bounces={false}>
        <ModalItemComponet itemTitle={"한국"}/>
        <ModalItemComponet itemTitle={"미국"}/>
        <ModalItemComponet itemTitle={"영국"}/>
        <ModalItemComponet itemTitle={"일본"}/>
        <ModalItemComponet itemTitle={"중국"}/>
        <ModalItemComponet itemTitle={"캐나다"}/>
        <ModalItemComponet itemTitle={"독일"}/>
        <ModalItemComponet itemTitle={"프랑스"}/>
        <ModalItemComponet itemTitle={"네덜란드"}/>
        <ModalItemComponet itemTitle={"한국"}/>
        <ModalItemComponet itemTitle={"미국"}/>
        <ModalItemComponet itemTitle={"영국"}/>
        <ModalItemComponet itemTitle={"일본"}/>
        <ModalItemComponet itemTitle={"중국"}/>
        <ModalItemComponet itemTitle={"캐나다"}/>
        <ModalItemComponet itemTitle={"독일"}/>
        <ModalItemComponet itemTitle={"프랑스"}/>
        <ModalItemComponet itemTitle={"네덜란드"}/>
      </ListContainer>
      <RegisterButton onPress={() => console.log("register")}>
        <RegisterText>선택완료</RegisterText>
      </RegisterButton>
      <CancelButton onPress={closeModal}>
        <CancelText>되돌아가기</CancelText>
      </CancelButton>
    </Container>
  );
};

export default ModalComponent;