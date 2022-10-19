import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  ActivityIndicator,
} from 'react-native';

import { Feather, AntDesign } from '@expo/vector-icons';
import { Container } from './styles';

interface IButton extends TouchableNativeFeedbackProps {
  onPress: () => void;
  icon?: string;
  text: string;
  type?: 'Feather' | 'AntDesign';
  loading?: boolean;
}

const Button = ({ icon, onPress, text, type, loading, ...rest }: IButton) => {
  return (
    <TouchableNativeFeedback style={styles.button} onPress={onPress}>
      <Container
        colors={['#0080b3', '#006e99', '#005b80', '#00587A']}
        {...rest}
      >
        {icon && loading ? (
          <ActivityIndicator size={24} color="#fff" />
        ) : icon && type === 'Feather' ? (
          <Feather name={icon} size={24} color="#fff" />
        ) : (
          icon && <AntDesign name={icon} size={24} color="#fff" />
        )}
        <Text style={styles.textButton}>{text}</Text>
      </Container>
    </TouchableNativeFeedback>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  textButton: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
});
