import React from 'react';
import styled from 'styled-components/native';

export default function Button({ buttonText, ...rest }) {
  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.TouchableOpacity`
  margin-bottom: 10px;
  background-color: #ffcc00;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #000;
  padding: 10px 50px 10px 50px;
`;
