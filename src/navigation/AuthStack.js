import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../app/SignIn';
import SignUp from '../app/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false, title: 'Sign In'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
    </Stack.Navigator>
  );
}
