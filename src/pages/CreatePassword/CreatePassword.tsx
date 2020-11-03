import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextInput, RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function CreatePassword() {
    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.backIcon}
                onPress={() => navigate.navigate('GeneratePassword')}
                name="md-arrow-round-back"
                size={40} color="#008891"
            />
        
            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="bookmark"
                    color="#008891"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                />
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="user"
                    color="#008891"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                />
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="key"
                    color="#008891"
                />           
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Senha"
                />
                <AntDesign
                    style={styles.iconRetWeet}
                    name="retweet"
                    color="#fff"
                />
            </View>

            <View style={styles.field}>
                <Feather
                    style={styles.icons}
                    name="link"
                    color="#008891"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Link"
                />
            </View>

            <Text style={styles.textSelectIcon}>Selecione um ícone</Text>
            <FontAwesome
                style={styles.lockIcon}
                name="lock" size={40}
                color="#008891"
            />

            <RectButton style={styles.button}>
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
                    <Feather name="save" size={32} color="#fff" />
                    <Text style={styles.textButton}>Gerar</Text>
                </LinearGradient>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",

        backgroundColor: "#0F3057",

        flex: 1,
        alignItems: "center",
    },

    backIcon: {
        width: 50,

        marginTop: 10,
        marginLeft: 10,
        marginBottom: 60,

        alignSelf: "baseline"
    },

    field: {
        width: "90%",

        marginTop: 24,

        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        backgroundColor: "#fff",
        color: "#008891",

        width: 271,
        height: 50,

        fontSize: 24,

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    inputPassword: {
        backgroundColor: "#fff",
        color: "#008891",

        width: 235,
        height: 50,

        fontSize: 24,

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    icons: {
        backgroundColor: "#fff",
        fontSize: 30,

        width: 40,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",

        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },

    iconRetWeet: {
        fontSize: 30,

        width: 37,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    textSelectIcon: {
        color: "#fff",
        fontSize: 20
    },

    lockIcon: {
        backgroundColor: "#fff",
        height: 55,
        width: 55,

        textAlign: "center",
        textAlignVertical: "center",

        borderRadius: 15
    },

    button: {
        color: "#fff",

        width: 140,
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

    textButton: {
        marginLeft: 10,
        fontSize: 24,
        color: "#fff",
    }
})