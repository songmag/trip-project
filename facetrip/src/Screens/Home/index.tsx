import React, {useState} from 'react';
import Styled from 'styled-components/native';
import { Image } from 'react-native';

import HeaderComponent from '~/Components/HeaderComponent';
import ModalButtonComponent from '~/Components/ModalButtonComponent';
import FilterBoardComponent from '~/Components/FilterBoardComponent';

const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

const FilterContainer = Styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
`;

const ModalContainer = Styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
`;

const ListContainer = Styled.View`
  flex: 1;
`;

const Home = () => {
  const [selectArea, setSelectArea] = useState<Array<String>>([]);
  // 현재 선택된 Area
  const [selectLanguage, setSelectLanguage] = useState<string | undefined>(undefined);
  // 현재 선택된 Language

  return (
    <Container>
      <HeaderComponent imagePath={require('~/Assets/Images/logoReplacement.png')} headerTitle={"로고 위치"}/>
      <FilterContainer>
        <ModalContainer>
          <ModalButtonComponent
            modalTitle={"지역 검색"}
            style={{
              flex: 1,
              alignItems: "flex-start"
            }}/>
          <ModalButtonComponent
            modalTitle={"사용 언어"}
            style={{
              flex: 1,
              alignItems: "flex-end"
            }}/>
        </ModalContainer>
        <FilterBoardComponent/>
      </FilterContainer>
      <ListContainer/>
    </Container>
  );
};

export default Home;