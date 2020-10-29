import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingUI from './screens/OnboardingUI.js';
import Login from './screens/Login.js';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
    console.log('value'+value)
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else {
        setIsFirstLaunch(false);
      }
    })
  },[])
  console.log('isFirstLaunch'+isFirstLaunch)
  if (isFirstLaunch == null) {
    return null;
  }
  else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Home" component={OnboardingUI} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return <Login />
  }
};


export default App;
