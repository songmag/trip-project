import React, {useState} from 'react';
import Styled from 'styled-components/native';
import {Image} from 'react-native';

const Container = Styled.View`
  width: 100%;
  height: 200px;
`;

const ImageSliderText = Styled.Text`
  padding: 5px 0 0 5px;
  margin-bottom: 5px;
`;

const ImageSliderButtonContainer = Styled.View`
  flex-direction: row;
  width: 25%;
  padding: 5px 0;
  margin-bottom: 5px;

  align-self: center;
  justify-content: space-around;
`;

const ImageSliderButton = Styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  background-color: gray;
  border-radius: 10px;
`;

interface Props {
  message: String;
}

const ImageSliderComponent = ({message}: Props) => {
  const [selectImageNumber, setSelectImageNumber] = useState<number>(1);

  // useEffect(() => {
  //   let sliderOn = setTimeout(() => {

  //     if(selectImageNumber == 4) {
  //       setSelectImageNumber(1);
  //     }
  //     else setSelectImageNumber(selectImageNumber+1);
  //   },2500);

  //   return () => {
  //     clearTimeout(sliderOn);
  //   }
  // });

  return (
    <Container>
      <ImageSliderText>{message}</ImageSliderText>
      <Image
        source={
          selectImageNumber == 1 ? require('~/Assets/Images/host1.png') :
          selectImageNumber == 2 ? require('~/Assets/Images/host2.png') :
          selectImageNumber == 3 ? require('~/Assets/Images/host3.png') : require('~/Assets/Images/host4.png')
        }
        style={{flex: 1, width: "95%", height: "100%", resizeMode: "stretch", alignSelf: "center", marginBottom: 5}}
      />
      <ImageSliderButtonContainer>
        <ImageSliderButton onPress={() => {
          setSelectImageNumber(1);
        }} style={{backgroundColor: selectImageNumber == 1 ? "#8fabff" : "#e2e2e2"}}/>
        <ImageSliderButton onPress={() => {
          setSelectImageNumber(2);
        }} style={{backgroundColor: selectImageNumber == 2 ? "#8fabff" : "#e2e2e2"}}/>
        <ImageSliderButton onPress={() => {
          setSelectImageNumber(3);
        }} style={{backgroundColor: selectImageNumber == 3 ? "#8fabff" : "#e2e2e2"}}/>
        <ImageSliderButton onPress={() => {
          setSelectImageNumber(4);
        }} style={{backgroundColor: selectImageNumber == 4 ? "#8fabff" : "#e2e2e2"}}/>
      </ImageSliderButtonContainer>
    </Container>
  );
};

export default ImageSliderComponent;