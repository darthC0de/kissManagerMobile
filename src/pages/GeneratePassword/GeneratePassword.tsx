import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import { Button } from '../../components';
import { ButtonsContainer, Container, PasswordContainer } from './styles';
import passwordGenerator from '../../utils/passwordGenerator';

export default function GeneratePassword() {
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigation();

  const getPassword = useCallback(async () => {
    let pwd = await passwordGenerator();
    setPassword(pwd);
  }, []);

  const setPasswordToClipboard = useCallback(async () => {
    if (password.length <= 0) {
      showMessage({
        message: 'Pressione o botão (Gerar) primeiro!',
        type: 'danger',
      });
      return;
    }
    await Clipboard.setStringAsync(password);
    showMessage({
      message: 'Senha copiada com sucesso!',
      type: 'success',
    });
  }, [password]);

  return (
    <Container>
      <FlashMessage position="top" />

      <PasswordContainer style={styles.containerGenerate}>
        <View style={styles.contentGenerate}>
          <View style={styles.passwordOutput}>
            {password.length > 0 ? (
              <Text style={styles.StylePassword}>{password}</Text>
            ) : (
              <Text style={styles.StylePasswordHint}>Clique em gerar</Text>
            )}
          </View>
          <View style={styles.copyIcon}>
            <Feather
              name="clipboard"
              size={40}
              color="#008891"
              onPress={setPasswordToClipboard}
            />
          </View>
        </View>
      </PasswordContainer>
      <ButtonsContainer style={styles.buttonAndIcon}>
        <Button
          onPress={() => getPassword()}
          text="Gerar"
          style={{ width: 120 }}
        />
        <Feather
          onPress={() => navigate.navigate('CreatePassword', { password })}
          style={styles.saveIcon}
          name="save"
          size={35}
          color="#fff"
        />
      </ButtonsContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerGenerate: {
    width: '90%',
    height: 250,

    marginTop: 200,

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentGenerate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  passwordOutput: {
    backgroundColor: '#fff',

    width: 235,
    height: 80,

    borderWidth: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,

    padding: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  StylePassword: {
    color: '#0F3057',
    fontSize: 24,
  },
  StylePasswordHint: {
    color: '#0F305766',
    fontSize: 24,
  },

  copyIcon: {
    backgroundColor: '#fff',
    color: '#008891',

    height: 80,
    width: 50,

    fontSize: 40,

    justifyContent: 'center',

    borderWidth: 0,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },

  button: {
    color: '#fff',

    width: 120,
    height: 60,

    marginTop: 10,
    marginBottom: 10,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 15,
  },

  textButton: {
    marginLeft: 10,
    fontSize: 24,
    color: '#fff',
  },

  buttonAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  saveIcon: {
    borderRadius: 5,
    padding: 3,
    marginLeft: 5,
  },
});
