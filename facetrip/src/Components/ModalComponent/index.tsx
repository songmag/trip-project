import React from 'react';
import Styled from 'styled-components/native';
<<<<<<< HEAD
import {FlatList} from 'react-native';
=======
>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)

import ModalItemComponet from '~/Components/ModalItemComponent';

const Container = Styled.SafeAreaView`
  width: 100%;
  height: 100%;

  background-color: #f8f8f8;
`;

<<<<<<< HEAD
const ListContainer = Styled.View`
  flex: 1;
`;

=======
const ModalDescriptionText = Styled.Text`

  padding: 10px 0;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const ListContainer = Styled.ScrollView``;

>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)
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
<<<<<<< HEAD
=======
const RegisterText = Styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)

const CancelButton = Styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  
<<<<<<< HEAD
  background-color: #0ffff8;

=======
  background-color: #99cddf;

  border: 1px solid #99cddf;
>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)
  border-radius: 10px;

  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
<<<<<<< HEAD

const ButtonText = Styled.Text`
  font-weight: bold;
  font-size: 15px;

`;

interface Props {
  closeModal: () => void;
  changeModal: (modalNum: number) => void;
  saveSelectedItem: () => void;
  getModalNumber: () => number;
}

const ModalComponent = ({closeModal, changeModal, saveSelectedItem, getModalNumber}: Props) => {

  const tempData: Array<Array<string>> = [
    [],
    [
      "한국", "미국", "영국", "일본", "중국", "캐나다", "독일", "프랑스", "캄보디아", "필리핀", "스페인","불가리아","헝가리","이탈리아", "포르투갈", "벨기에", "슬로베니아", "러시아"
    ],
    [
      "서울", "강원도", "부산", "인천", "경기도", "함경도", "대구", "대전", "제주"
    ],
    [
      "한국어", "영어", "중국어", "독어", "불어", "일어", "아랍어"
    ]
  ];

  return (
    <Container>
      <ListContainer>
        <FlatList
          data={tempData[getModalNumber()]}
          keyExtractor={item => item}
          renderItem={({item}) => {
              return (
                <ModalItemComponet itemTitle={item}/>
              );
            }
          }
        />
      </ListContainer>
      <RegisterButton onPress={() => {
        if(getModalNumber() == 1) {
          saveSelectedItem();
          changeModal(2);
        } else {
          saveSelectedItem();
          closeModal();
        }
      }}>
        <ButtonText>선택완료</ButtonText>
      </RegisterButton>
      <CancelButton onPress={() => {
        if(getModalNumber() == 1 || getModalNumber() == 3) {
          closeModal();
        } else if(getModalNumber() == 2) {
          changeModal(1);
        }
      }}>
        <ButtonText>되돌아가기</ButtonText>
=======
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
>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)
      </CancelButton>
    </Container>
  );
};

export default ModalComponent;