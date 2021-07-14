import React from 'react';
import Styled from 'styled-components/native';
import {Image} from 'react-native';

const Container = Styled.View`
  width: 90%;
  height: 60px;
  margin: 0 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const IconContainer = Styled.View`
  width: 15%;
  height: 60%;
`;

const SearchBarInput = Styled.TextInput`
  width: 80%;
  height: 100%;
  font-size: 15px;
  border-left-color: black;
  border-left-width: 0.5px;
  padding: 0 20px;
  font-weight: bold;
`;

const SearchBar = () => {
  return (
    <Container>
      <IconContainer>
        <Image source={require("~/Assets/Images/search.png")} style={{flex:1, width: "100%", height: "100%", resizeMode: "contain"}}/>
      </IconContainer>
      <SearchBarInput
        placeholder="검색어를 입력해주세요"
        autoCapitalize="none"
        clearButtonMode="while-editing"
        keyboardType="default"
        autoCompleteType="off"/>
        {/* autoCompleteType의 경우 Android만 적용 */}
    </Container>
  );
};

export default SearchBar;