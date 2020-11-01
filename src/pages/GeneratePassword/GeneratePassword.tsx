import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useActive } from 'react-native-web-hooks';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function GeneratePassword() {
    const navigate = useNavigation();
    return (
        <ScrollView style={styles.main}>
            <View style={styles.backIcon}>
                <Ionicons
                    onPress={() => navigate.navigate('Inicio')}
                    name="md-arrow-round-back"
                    size={40} color="#008891"
                />
            </View>
            <View style={styles.containerGenerate}>
                <View style={styles.contentGenerate}>
                    <View style={styles.passwordOutput}>
                        <Text style={styles.StylePassword}>2Hi3Lvy#bPnL</Text>
                    </View>
                    <View style={styles.copyIcon}>
                        <Feather name="clipboard" size={40} color="#008891" />
                    </View>
                </View>
                <View style={styles.buttonAndIcon}>
                    <RectButton style={styles.button} onPress={() => Alert.alert('Funcionou!!')}>
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
                            {/* <AntDesign name="folder1" size={32} color="#fff" /> */}
                            <Text style={styles.textButton}>Gerar</Text>
                        </LinearGradient>
                    </RectButton>

                    <Feather style={styles.saveIcon} name="save" size={35} color="#008891" />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#0F3057",
        flex: 1
    },

    backIcon: {
        width: 50,

        marginTop: 10,
        marginLeft: 10
    },

    containerGenerate: {
        width: "90%",
        height: 250,

        marginTop: 200,

        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },

    contentGenerate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    passwordOutput: {
        backgroundColor: "#fff",

        width: 235,
        height: 80,

        borderWidth: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,

        padding: 5,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    StylePassword: {
        color: "#0F3057",
        fontSize: 24
    },

    copyIcon: {
        backgroundColor: "#fff",
        color: "#008891",

        height: 80,
        width: 50,

        fontSize: 40,

        justifyContent: "center",

        borderWidth: 0,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15
    },

    button: {
        color: "#fff",

        width: 120,
        height: 60,

        marginTop: 10,
        marginBottom: 10,

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 15
    },

    textButton: {
        marginLeft: 10,
        fontSize: 24,
        color: "#fff",
    },

    buttonAndIcon: {
        flexDirection: "row",
        alignItems: "center"
    },

    saveIcon: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 3,
        marginLeft: 5
    }

})