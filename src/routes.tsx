import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './pages/MainScreen/MainScreen'
import GeneratePassword from './pages/GeneratePassword/GeneratePassword'

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Inicio"
                    component={MainScreen}
                />

                <Screen
                    name="GeneratePassword"
                    component={GeneratePassword}
                />
            </Navigator>
        </NavigationContainer>
    );
}
