import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export default function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="orange" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
