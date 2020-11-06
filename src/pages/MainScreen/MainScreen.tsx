import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Feather, AntDesign } from '@expo/vector-icons';

export default function MainScreen() {
    const navigate = useNavigation();

    return (
        <View style={styles.main}>
            <View style={styles.viewButtons}>
                <RectButton style={styles.buttons} onPress={() => navigate.navigate('GeneratePassword')}>
                    <LinearGradient
                        colors={['#0080b3', '#006e99', '#005b80', '#00587A']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            borderRadius: 15,

                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <Feather name="key" size={32} color="#fff" />
                        <Text style={styles.textButtons}>Gerar senha</Text>
                    </LinearGradient>
                </RectButton>

                <RectButton style={styles.buttons} onPress={() => Alert.alert('Funcionou!!')}>
                    <LinearGradient
                        colors={['#0080b3', '#006e99', '#005b80', '#00587A']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            borderRadius: 15,

                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <AntDesign name="folder1" size={32} color="#fff" />
                        <Text style={styles.textButtons}>Gerenciar senhas</Text>
                    </LinearGradient>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0F3057",
        flex: 1,
    },

    viewButtons: {
        alignSelf: 'center',
        alignItems: "center",

        width: "100%",
        marginTop: 230,
    },

    buttons: {
        color: "#fff",

        width: 240,
        height: 70,
        marginTop: 10,
        marginBottom: 10,

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 15,
    },

    textButtons: {
        marginLeft: 10,
        fontSize: 24,
        color: "#fff",
    }
})