import React from 'react';
import Styled from 'styled-components/native';
import {FlatList} from 'react-native';

import ModalItemComponet from '~/Components/ModalItemComponent';

const Container = Styled.SafeAreaView`
  width: 100%;
  height: 100%;

  background-color: #f8f8f8;
`;

const ListContainer = Styled.View`
  flex: 1;
  /* height: 100%; */
`;

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
  
  background-color: #0ffff8;

  border: 1px solid #0ffff8;
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
        <RegisterText>선택완료</RegisterText>
      </RegisterButton>
      <CancelButton onPress={() => {
        if(getModalNumber() == 1 || getModalNumber() == 3) {
          closeModal();
        } else if(getModalNumber() == 2) {
          changeModal(1);
        }
      }}>
        <CancelText>되돌아가기</CancelText>
      </CancelButton>
    </Container>
  );
};

export default ModalComponent;