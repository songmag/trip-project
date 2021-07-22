import React, {useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import HeaderComponent from '~/Components/HeaderComponent';
<<<<<<< HEAD
import FilterComponent from '~/Components/FilterComponent';
import GuideListComponent from '~/Components/GuideListComponent';

=======
import ModalButtonComponent from '~/Components/ModalButtonComponent';
import FilterBoardComponent from '~/Components/FilterBoardComponent';
>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)

const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

<<<<<<< HEAD
type NavigationProp = StackNavigationProp<ShowGuideNaviParam, 'ShowGuide'>

<<<<<<< HEAD
const Home = () => {
  const [selectedArea, setSelectArea] = useState<Array<string>>([]);
  // 현재 선택된 Area
=======
interface Props {
  navigation: NavigationProp;
}

const Home = ({navigation}: Props) => {
  const [selectedArea, setSelectArea] = useState<Object>({});
>>>>>>> rn
  const [selectedLanguage, setSelectedLanguage] = useState<Array<string>>([]);
  // 현재 선택된 Language

  const setSelectAreaPropFunction = (selectItem: Object) => {
    setSelectArea(selectItem);
  }

  const setSelectLanguagePropFunction = (selectItem: Array<string>) => {
    setSelectedLanguage(selectItem);
  }

  return (
    <Container>
      <HeaderComponent imagePath={require('~/Assets/Images/logoReplacement.png')} headerTitle={"로고 위치"}/>
      <FilterComponent
        selectArea ={selectedArea}
        selectLanguage={selectedLanguage}
        setSelectAreaPropFunction={setSelectAreaPropFunction}
        setSelectLanguagePropFunction={setSelectLanguagePropFunction}/>
      <GuideListComponent navigation={navigation}/>
=======
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
>>>>>>> a44c5b60 ([2021-07-16] FaceTrip)
    </Container>
  );
};

export default Home;