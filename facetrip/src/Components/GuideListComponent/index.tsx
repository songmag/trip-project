import React from 'react';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import GuideItemComponent from '~/Components/GuideItemComponent';

const Container = Styled.ScrollView`
  flex: 1;
  width: 100%;
`;

type NavigationProp = StackNavigationProp<ShowGuideNaviParam, 'ShowGuide'>

interface Props {
  navigation: NavigationProp;
}

const StayListComponent = ({navigation}: Props) => {

  const pushToShowGuide = () => {
    navigation.navigate("ShowGuide");
  }

  return (
    <Container bounces={false}>
      <GuideItemComponent pushToShowGuide={pushToShowGuide}/>
      <GuideItemComponent pushToShowGuide={pushToShowGuide}/>
      <GuideItemComponent pushToShowGuide={pushToShowGuide}/>
      <GuideItemComponent pushToShowGuide={pushToShowGuide}/>
      <GuideItemComponent pushToShowGuide={pushToShowGuide}/>
    </Container>
  );
};

export default StayListComponent;