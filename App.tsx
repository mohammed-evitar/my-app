/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import LoginScreen from './screens/LoginScreen';

// Enable hot reloading
if (__DEV__) {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore specific warnings if needed
}

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0A0710" />
      <LoginScreen />
    </>
  );
}

export default App;
