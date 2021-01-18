import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/Fontisto';

const SearchBar = ({ text, onPress, onChangeText, value }) => {
  return (
    <ContainerSB>
      <TextinputWrapperSB>
        <TextinputStyleSB
          placeholder="Search Title"
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          value={value}
          autoCorrect={false}
        />
        <SearchWrapper onPress={onPress}>
          <Icon name="search" size={15} />
        </SearchWrapper>
      </TextinputWrapperSB>
    </ContainerSB>
  );
};

export default SearchBar;

const ContainerSB = styled.View`
  align-items: center;
`;
const TextinputWrapperSB = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 5px;
`;
const TextinputStyleSB = styled.TextInput`
  width: 80%;
  font-size: 15px;
  margin-left: 10px;
  padding: 10px;
`;
const SearchWrapper = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
