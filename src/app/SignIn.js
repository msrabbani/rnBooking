import React, { useState, useContext, createContext } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { AuthContext } from '../navigation/Routes';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  const fullField = email === '' || password === '';

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
        buttonText={'Sign In'}
        onPress={() => signIn({ email, password })}
        disabled={fullField}
      />
      <TextStyle>Don't have an account?</TextStyle>
      <TextStyleClick onPress={() => navigation.navigate('SignUp')}>
        {' '}
        Create an account
      </TextStyleClick>
    </ContainerSign>
  );
}

const ContainerSign = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text``;

const TextStyleClick = styled.Text`
  color: #fc9b1b;
  font-weight: 600;
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
