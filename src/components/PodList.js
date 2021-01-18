import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { formatDate } from '../utils/helpers';

const widthScreen = Dimensions.get('screen').width;

export default function PodList(props) {
  const renderItems = ({ item }) => {
    return (
      <Card>
        <Title>{`Jl.Siliwangi gg.H.Marjuki no`}</Title>
        <ImageStyle source={{ uri: item.urlImage }} />
        <Button
          buttonText={'Book'}
          style={{ width: '100%', borderRadius: 10 }}
          onPress={() => props.onPressItem(item)}
        />
      </Card>
    );
  };
  const BottomView = () => {
    return (
      <View>
        {props.fetchingStatus ? (
          <ActivityIndicatorStyle
            size="large"
            color="grey"
            style={{ marginLeft: 6, marginVertical: 10 }}
          />
        ) : null}
      </View>
    );
  };

  return (
    <Container>
      {props.isLoading ? (
        <ActivityIndicatorStyle size="large" />
      ) : (
        <FlatList
          data={props.data}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          numColumns={1}
          initialNumToRender={1}
          ItemSeparatorComponent={() => <FlatListItemSeparator />}
          maxToRenderPerBatch={1}
          onEndReachedThreshold={2}
          ListFooterComponent={BottomView()}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #363636;
`;

const ActivityIndicatorStyle = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #ffcc00;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
const Subtitle = styled.Text`
  font-size: 11px;
  color: #ffcc00;
`;
const Card = styled.View`
  padding: 5px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 3px 3px #00000029;
`;
const ImageStyle = styled.Image`
  width: ${widthScreen * 0.95}px;
  height: 220px;
  border-radius: 5px;
  margin-vertical: 10px;
  justify-content: center;
  align-items: center;
`;
const FlatListItemSeparator = styled.View`
  height: 0.5px;
  width: 90%;
  background-color: black;
  align-self: center;
`;
