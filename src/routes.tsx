import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './pages/MainScreen/MainScreen'
import GeneratePassword from './pages/GeneratePassword/GeneratePassword'
<<<<<<< HEAD:src/routes.tsx
=======
import CreatePassword from './pages/CreatePassword/CreatePassword'
>>>>>>> upstream/develop:routes.tsx

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Main"
                    component={MainScreen}
                />

                <Screen
                    name="GeneratePassword"
                    component={GeneratePassword}
                />

                <Screen name="CreatePassword" component={CreatePassword}/>
            </Navigator>
        </NavigationContainer>
    );
}
