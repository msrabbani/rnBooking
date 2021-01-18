import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { AuthContext } from '../navigation/Routes';

export default function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);
  return (
    <Container>
      <Button buttonText={'Sign Out'} onPress={() => signOut()} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #363636;
`;
