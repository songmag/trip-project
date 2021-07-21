import React, {useState} from 'react';
import Styled from 'styled-components/native';

import HeaderComponent from '~/Components/HeaderComponent';
import FilterComponent from '~/Components/FilterComponent';
import StayListComponent from '~/Components/StayListComponent';


const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

const Home = () => {
  const [selectedArea, setSelectArea] = useState<Object>({});
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
      <StayListComponent/>
    </Container>
  );
};

export default Home;