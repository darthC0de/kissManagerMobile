import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const BackIcon: React.FC = () => {
  const navigate = useNavigation();

  return (
    <Ionicons
      onPress={() => navigate.goBack()}
      name="md-arrow-back"
      size={40}
      color="#008891"
      style={{
        paddingLeft: 10,
      }}
    />
  );
};

export default React.memo(BackIcon);
