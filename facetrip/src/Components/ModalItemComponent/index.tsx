import React, {useState} from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  width: 100%;
  padding-bottom: 10px;
`;

const ItemSelectButton = Styled.TouchableOpacity`
  width: 80%;
  height: 50px;

  background-color: #e2e2e2;
  border-radius: 10px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;

const ItemText = Styled.Text`
  text-align: center;
  font-weight: bold;
`;

interface Props {
  itemTitle: string;
}

const ModalItemComponent = ({itemTitle}: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <Container>
      <ItemSelectButton style={
        isSelected ? {backgroundColor: "#236ea5"} : {backgroundColor: "#e2e2e2"}
      } onPress={() => {
        setIsSelected(!isSelected);
      }}>
        <ItemText
          style= {
            isSelected ? {color: "white"} : {color: "black"}
          }
        >{itemTitle}</ItemText>
      </ItemSelectButton>
    </Container>
  );
};

export default ModalItemComponent;