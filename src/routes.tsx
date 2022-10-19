import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import MainScreen from './pages/MainScreen/MainScreen';
import GeneratePassword from './pages/GeneratePassword/GeneratePassword';
import CreatePassword from './pages/CreatePassword/CreatePassword';
import ManagerPassword from './pages/ManagerPassword/ManagerPassword';
import ViewPassword from './pages/ViewPassword/ViewPassword';
import EditPassword from './pages/EditPassword/EditPassword';

import { BackIcon } from './components';
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#0F3057',
          },
        }}
        initialRouteName="Main"
      >
        <Screen name="Main" component={MainScreen} />

        <Screen
          name="GeneratePassword"
          component={GeneratePassword}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#0F3057',
              elevation: 0,
            },
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => <BackIcon />,
          }}
        />

        <Screen name="CreatePassword" component={CreatePassword} />

        <Screen name="ManagerPassword" component={ManagerPassword} />

        <Screen name="ViewPassword" component={ViewPassword} />
        <Screen name="EditPassword" component={EditPassword} />
      </Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
