import React, { useState } from 'react';
import { Dimensions, View, Button, Platform } from 'react-native';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../utils/helpers';
const widthScreen = Dimensions.get('screen').width;

export default function ScheduleOptions({ route, navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <ScrollViewStyled>
      {/* <TitleDetails>{title}</TitleDetails>
      <PublishText>Publish: {formatDate(createdAt)}</PublishText>
      <ImageStyle source={{ uri: urlImage }} />
      <AuthorText>By: {author}</AuthorText>
      {renderDesc(descriptionArr)} */}
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </ScrollViewStyled>
  );
}

const ScrollViewStyled = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  background-color: #ddf5ff;
`;
const TitleDetails = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;
const PublishText = styled.Text`
  font-size: 12px;
  text-align: center;
`;
const AuthorText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
  color: #01a6bc;
  margin-bottom: 5px;
`;

const ImageStyle = styled.Image`
  width: ${widthScreen * 0.95};
  height: 220px;
  border-radius: 5px;
  margin-vertical: 20px;
  justify-content: center;
  align-items: center;
`;
