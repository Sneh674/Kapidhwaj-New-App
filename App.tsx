import React from 'react';
import { Provider } from 'react-redux';
import { themeStore } from './src/redux/store/themeStore';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/auth/Login';
// import Register from './src/auth/Register';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  // const Stack = createNativeStackNavigator();
  return (
    <Provider store={themeStore}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({});