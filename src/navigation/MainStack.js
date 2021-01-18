import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../app/Home';
import ScheduleOptions from '../app/ScheduleOptions';
import Profile from '../app/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#ffcc00',
        activeBackgroundColor: '#363636',
        inactiveBackgroundColor: '#363636',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bulletin-board" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="ScheduleOptions"
        component={ScheduleOptions}
        options={({ route }) => ({
          title: route.params.data.name,
          headerStyle: { backgroundColor: '#ffcc00' },
        })}
      />
    </Stack.Navigator>
  );
}
