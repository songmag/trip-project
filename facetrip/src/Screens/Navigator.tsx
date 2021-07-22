import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '~/Screens/Home';
import ShowGuide from '~/Screens/ShowGuide';
import Info from '~/Screens/Info';
import Chat from '~/Screens/Chat';
import PersonalChat from '~/Screens/PersonalChat';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* headerShown : 헤더를 보여줄 것인지 숨길 것인지 and Navigator에 적용하면 하위 모든 컴포넌트에 적용 */}
      {/*               Screen에 적용하면 해당 컴포넌트에만 적용 */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, title: "이전"}}/>
      <Stack.Screen
        name="ShowGuide"
        component={ShowGuide}
        options={{headerShown: true, title: "가이드"}}
      />
    </Stack.Navigator>
  );
};

const MyInfoTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyInfo" component={Info}/>
    </Stack.Navigator>
  );
};

const ChatTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="Chat"
        component={Chat}
        options={{headerShown: false, title: "이전"}}/>
      <Stack.Screen 
        name="PersonalChat"
        component={PersonalChat}
        options={{headerShown: true, title: "채팅"}}/>
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {height: "10%", borderTopColor: "black"},
        }}>
      {/* showLabel : tabbar를 위한 label을 보여줄 것인지 설정 / default = true */}
      <BottomTab.Screen
        name="Home" 
        component={HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image
              source={require('~/Assets/Images/language.png')}
              style={{ width: 30, height: 30, tintColor: '#20d9d8'}}/> :
            <Image 
              source={require('~/Assets/Images/language.png')}
              style={{ width: 25, height: 25, tintColor: '#000000'}}/>
          ),
        }}
      />
      <BottomTab.Screen
        name="MyInfo"
        component={Info}
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image
              source={require('~/Assets/Images/identity.png')}
              style={{ width: 40, height: 40, tintColor: '#20d9d8'}}/> :
            <Image 
              source={require('~/Assets/Images/identity.png')}
              style={{ width: 25, height: 25, tintColor: '#000000'}}/>
          ),
        }}
      />
      <BottomTab.Screen
        name="question"
        component={ChatTab}
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image
              source={require('~/Assets/Images/question.png')}
              style={{ width: 30, height: 30, tintColor: '#20d9d8'}}/> :
            <Image 
              source={require('~/Assets/Images/question.png')}
              style={{ width: 25, height: 25, tintColor: '#000000'}}/>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};
