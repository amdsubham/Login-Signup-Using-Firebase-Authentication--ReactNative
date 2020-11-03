import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingUI from '../screens/OnboardingUI.js';
import Login from '../screens/Login.js';
import AsyncStorage from '@react-native-community/async-storage';
import SignupScreen from '../screens/SignupScreen.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';
const Stack = createStackNavigator();
const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            }
            else {
                setIsFirstLaunch(false);
            }
        })
    }, [])
    if (isFirstLaunch == null) {
        return null;
    }
    else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    }
    else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name="Onboarding" component={OnboardingUI} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <FontAwesome.Button
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })}
            />
        </Stack.Navigator>

    )
};


export default AuthStack;
