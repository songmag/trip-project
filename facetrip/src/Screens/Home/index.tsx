import React, {useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import HeaderComponent from '~/Components/HeaderComponent';
import FilterComponent from '~/Components/FilterComponent';
import GuideListComponent from '~/Components/GuideListComponent';


const Container = Styled.View`
  flex: 1;
  background-color: white;
`;

type NavigationProp = StackNavigationProp<ShowGuideNaviParam, 'ShowGuide'>

interface Props {
  navigation: NavigationProp;
}
const Home = ({navigation}: Props) => {
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
      <GuideListComponent navigation={navigation}/>
    </Container>
  );
};

export default Home;