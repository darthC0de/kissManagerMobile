import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components';

export default function MainScreen() {
  const navigate = useNavigation();

  return (
    <View style={styles.main}>
      <Button
        onPress={() => navigate.navigate('GeneratePassword')}
        icon="key"
        type="Feather"
        text="Gerar senha"
      />
      <Button
        onPress={() => navigate.navigate('ManagerPassword')}
        icon="folder"
        type="Feather"
        text="Gerenciar senhas"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0F3057',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
  },
});
