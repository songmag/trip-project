import React, {useState} from 'react';
import Styled from 'styled-components/native';

import ModalComponent from '~/Components/ModalComponent';

const Container = Styled.View`
  justify-content: center;
`;

const ModalContainer = Styled.Modal``;

const ModalButton = Styled.TouchableOpacity`
  width: 97%;
  height: 80%;
  
  border: 1px solid #7c7974;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;

const ModalButtonText = Styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #1f2c43;
`;

interface Props {
  style: object;
  modalTitle: string;
}

const ModalButtonComponent = ({style, modalTitle}: Props) => {
  // const [areaSelectModal, setAreaSelectModal] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  // const closeModal = () => {
  //   setAreaSelectModal(false);
  // }
  const closeModal = () => {
    setIsSelected(false);
  }

  return (
    <Container style={style}>
      <ModalContainer
        animationType={"slide"}
        transparent={true}
        visible={isSelected}
      >
        {modalTitle === "지역 검색" 
          ? <ModalComponent modalTitle={"국가 선택"} closeModal={closeModal}/> : <ModalComponent modalTitle={"언어 선택"} closeModal={closeModal}/>
        }
      </ModalContainer>
      <ModalButton onPress={() => {
        setIsSelected(true);
      }}>
        <ModalButtonText>{modalTitle}</ModalButtonText>
      </ModalButton>
    </Container>
  );
};

export default ModalButtonComponent;