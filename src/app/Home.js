import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import PodList from '../components/PodList';
import Loading from '../components/Loading';

const dummyJSON = [
  { id: 1, name: 'Orphan Road', urlImage: 'https://picsum.photos/500/300' },
  {
    id: 2,
    name: 'Middleville Road',
    urlImage: 'https://picsum.photos/500/300',
  },
  {
    id: 3,
    name: 'Simons Hollow Road',
    urlImage: 'https://picsum.photos/500/300',
  },
  { id: 4, name: 'Brookside Drive', urlImage: 'https://picsum.photos/500/300' },
  { id: 5, name: 'Center Street', urlImage: 'https://picsum.photos/500/300' },
  { id: 6, name: 'Orphan Road', urlImage: 'https://picsum.photos/500/300' },
];

export default function Home({ navigation }) {
  const [dataApi, seDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    seDataApi(dummyJSON);
  }, []);

  return (
    <Container>
      <ListWrapper>
        {isLoading ? <Loading /> : <PodList data={dataApi} {...navigation} />}
      </ListWrapper>
    </Container>
  );
}

const ListWrapper = styled.View`
  flex: 1;
`;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #363636;
`;
