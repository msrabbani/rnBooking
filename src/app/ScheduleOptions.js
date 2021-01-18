import React, { useState, useEffect } from 'react';
import { FlatList, Platform, Alert } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

const dummySlot = [
  { id: 1, slot: '9:00 - 9:30', selected: false },
  { id: 2, slot: '9:30 - 10:00', selected: false },
  { id: 3, slot: '10:00 - 10:30', selected: false },
  { id: 4, slot: '10:30 - 11:00', selected: false },
  { id: 5, slot: '11:00 - 11:30', selected: false },
  { id: 6, slot: '11:30 - 12:30', selected: false },
  { id: 7, slot: '12:30 - 13:30', selected: false },
  { id: 8, slot: '13:30 - 14:00', selected: false },
  { id: 9, slot: '14:00 - 14:30', selected: false },
  { id: 10, slot: '14:00 - 15:30', selected: false },
  { id: 11, slot: '15:30 - 16:00', selected: false },
];

export default function ScheduleOptions({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dataSlot, setDataSlot] = useState([]);
  let dataSelected = dataSlot && dataSlot.filter((x, i) => x.selected);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const selectItem = (id) => {
    let renderData = [...dataSlot];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = !data.selected;
        break;
      }
    }
    setDataSlot(renderData);
  };

  const renderItems = ({ item }) => {
    return (
      <Card selected={item.selected} onPress={() => selectItem(item.id)}>
        <PublishText>{item.slot}</PublishText>
      </Card>
    );
  };

  useEffect(() => {
    showDatepicker();
    setDataSlot(dummySlot);
  }, [dataSlot]);

  const onPressBookNow = () => {
    Alert.alert(
      'Thanks 💁',
      'Happy Gym!',
      [
        {
          text: 'OK',
          onPress: () => {
            setDataSlot([]);
            navigation.navigate('Home');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          display={'calendar'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <FlatList
        data={dummySlot}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        disabled={dataSelected && !dataSelected.length}
        buttonText={'Book Now'}
        style={{ borderRadius: 0 }}
        onPress={onPressBookNow}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  background-color: #363636;
`;

const Card = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${(props) => (props.selected ? '#ffcc00' : 'grey')};
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 3px 3px black;
`;
const PublishText = styled.Text`
  font-size: 15px;
  text-align: center;
`;
