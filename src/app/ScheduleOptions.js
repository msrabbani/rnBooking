import React, { useState, useEffect } from 'react';
import { FlatList, Platform, Alert } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

const DummyTime = [
  { id: 1, slot: '9:00 - 9:30', isSelect: false },
  { id: 2, slot: '9:30 - 10:00', isSelect: false },
  { id: 3, slot: '10:00 - 10:30', isSelect: false },
  { id: 4, slot: '10:30 - 11:00', isSelect: false },
  { id: 5, slot: '11:00 - 11:30', isSelect: false },
  { id: 6, slot: '11:30 - 12:30', isSelect: false },
  { id: 7, slot: '12:30 - 13:30', isSelect: false },
  { id: 8, slot: '13:30 - 14:00', isSelect: false },
  { id: 9, slot: '14:00 - 14:30', isSelect: false },
  { id: 10, slot: '14:00 - 15:30', isSelect: false },
  { id: 11, slot: '15:30 - 16:00', isSelect: false },
];

export default function ScheduleOptions({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

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

  const selectItem = (data) => {
    data.isSelect = !data.isSelect;
    let index = selectedData.findIndex((item) => data.id === item.id);
    selectedData[index] = data;
    let newData = [data, ...selectedData];
    setSelectedData(newData);
  };

  const renderItems = ({ item }) => {
    return (
      <Card selected={item.isSelect} onPress={() => selectItem(item)}>
        <PublishText>{item.slot}</PublishText>
      </Card>
    );
  };

  useEffect(() => {
    showDatepicker();
  }, []);

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
        data={DummyTime}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedData}
      />
      <Button
        buttonText={'Book Now'}
        style={{ borderRadius: 0 }}
        onPress={() =>
          Alert.alert(
            'Yaeh',
            'Happy Gym!',
            [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
            { cancelable: false }
          )
        }
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
