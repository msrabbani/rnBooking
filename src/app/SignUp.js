import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
// import {AuthContext} from '../navigation/AuthProvider';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fullField = email === '' || password === '';

  // const {signup} = useContext(AuthContext);
  return (
    <ContainerSign>
      <TextinputWrapper>
        <Icon
          name="account"
          color={'#333'}
          size={20}
          style={{ marginLeft: 12 }}
        />
        <TextInputStyle
          value={email}
          placeholder="Email"
          onChangeText={(userEmail) => setEmail(userEmail)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
      </TextinputWrapper>

      <TextinputWrapper>
        <Icon name="eye" color={'#333'} size={20} style={{ marginLeft: 12 }} />
        <TextInputStyle
          value={password}
          placeholder="Password"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </TextinputWrapper>

      <Button
        buttonText={'Sign Up'}
        // onPress={() => signup(email, password)}
        disabled={fullField}
      />
    </ContainerSign>
  );
}

const ContainerSign = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextInputStyle = styled.TextInput`
  font-size: 15px;
  padding: 10px;
  background-color: #ffff;
  width: 60%;
`;

const TextinputWrapper = styled.View`
  flex-direction: row;
  background-color: #ffff;
  border-radius: 5px;
  margin-vertical: 10px;
  align-items: center;
`;
