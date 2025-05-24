/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import NewPreference from './screens/NewPreference';
import ManualSelectionPage from './screens/ManualSelectionPage';

// Enable hot reloading
if (__DEV__) {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore specific warnings if needed
}

export type RootStackParamList = {
  Login: undefined;
  NewPreference: {user: {name: string}};
  ManualSelectionPage: {user: {name: string}};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0A0710" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewPreference" component={NewPreference} />
        <Stack.Screen
          name="ManualSelectionPage"
          component={ManualSelectionPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
