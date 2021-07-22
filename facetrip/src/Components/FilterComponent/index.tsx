import React, {useState} from 'react';
import Styled from 'styled-components/native';

import FilterBoardComponent from '~/Components/FilterBoardComponent';
import ModalComponent from '~/Components/ModalComponent';

const Container = Styled.View`
  width: 100%;
  height: 150px;
  padding: 10px 0;
  align-items: center;
`;

const ModalContainer = Styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
`;

const ModalButtonContainer = Styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: 5px;
`;

const ModalButton = Styled.TouchableOpacity`
  width: 97%;
  height: 90%;
  justify-content: center;
  border: 1px solid #7c7974;
  border-radius: 10px;
`;

const ModalButtonText = Styled.Text`
  font-size: 15px;
  text-align: center;

  font-weight: bold;
  color: #1f2c43;
`;

const SelectModal = Styled.Modal``;

interface Props {
  selectArea: Object;
  selectLanguage: Array<string>;
  setSelectAreaPropFunction: (selectItem: Object) => void;
  setSelectLanguagePropFunction: (selectItem: Array<string>) => void;
}

const FilterComponent = ({selectArea, selectLanguage, setSelectAreaPropFunction, setSelectLanguagePropFunction}: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalNumber, setModalNumber] = useState<number>(0);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
    setModalNumber(0);
  }

  const getModalNumber = () => {
    return modalNumber;
  }

  const changeModal = (modalNum: number) => {
    setModalNumber(modalNum);
  }

  const saveSelectedItems = () => {
    console.log('save');
  }

  return (
    <Container>
      <SelectModal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible && modalNumber !== 0}>
          <ModalComponent
            closeModal={closeModal}
            changeModal={changeModal} 
            saveSelectedItem={saveSelectedItems}
            getModalNumber={getModalNumber}/>
      </SelectModal>
      <ModalContainer>
        <ModalButtonContainer style={{alignItems: "flex-start"}}>
          <ModalButton onPress={() => {
            changeModal(1);
            openModal();
          }}>
            <ModalButtonText>지역선택</ModalButtonText>
          </ModalButton>
        </ModalButtonContainer>
        <ModalButtonContainer style={{alignItems: "flex-end"}}>
          <ModalButton onPress={() => {
            changeModal(3);
            openModal();
          }}>
            <ModalButtonText>언어선택</ModalButtonText>
          </ModalButton>
        </ModalButtonContainer>
      </ModalContainer>
      <FilterBoardComponent/>
    </Container>
  );
};

export default FilterComponent;