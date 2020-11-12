import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLinkProps, useNavigation } from '@react-navigation/native';

import { TextInput, RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import passwordGenerator from '../../utils/passwordGenerator';

import { Feather, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function ViewPassword() {
    let [password, setPassword] = useState<string>('');
    const [value, onChangeText] = React.useState('');
    const [secure, setSecure] = React.useState(secure);
    const [focus, setFocus] = React.useState(focus);

    const navigate = useNavigation();

    async function getPassword() {
        let pwd = await passwordGenerator()
        setPassword(pwd)
    }

    return (
            <View style={styles.container}>
                <Ionicons
                    style={styles.backIcon}
                    onPress={() => navigate.navigate('ManagerPassword')}
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
                    value="Title" 
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
                        value="Username"
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

                        onChangeText={text => onChangeText(text)}
                        // value="Password"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        secureTextEntry={secure}

                        placeholder="password"
                    />
                    
                    {
                        secure &&
                        <Feather style={styles.iconEye} 
                        name={secure ? "eye" : 'eye-slash'}
                        onPress={() => setSecure(!secure)}
                        />
                    }

                    <Feather 
                        onPress={() => getPassword()}
                        style={styles.iconEye}
                        name="eye"
                        color="#008891"
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
                        value="http://facebook.com/"
                    />
                </View>

                {/* <RectButton style={styles.button} onPress={() => navigate.navigate('ManagerPassword')}>
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
                        <Text style={styles.textButton}>Salvar</Text>
                    </LinearGradient>
                </RectButton> */}
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

        backgroundColor: "#0F3057",

        marginTop: 24,

        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        // backgroundColor: "#fff",
        color: "#fff",

        width: 300,
        height: 50,

        fontSize: 24,

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    inputPassword: {
        // backgroundColor: "#fff",
        color: "#fff",

        width: 265,
        height: 50,

        fontSize: 24,

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    icons: {
        backgroundColor: "#0F3057",
        fontSize: 30,

        width: 40,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",

        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },

    iconEye: {
        fontSize: 30,

        width: 37,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",

        borderWidth: 2
        // borderTopRightRadius: 15,
        // borderBottomRightRadius: 15
    },

    textSelectIcon: {
        color: "#fff",
        fontSize: 20,

        margin: 10  
    },

    lockIcon: {
        backgroundColor: "#fff",
        height: 55,
        width: 55,

        marginBottom: 10,

        textAlign: "center",
        textAlignVertical: "center",

        borderRadius: 15
    },

    // ViewselectIcons: {
    //     backgroundColor: "#fff",
    //     width: "90%",
    //     borderRadius: 6
    // },

    selectIcons: {
        // display: "none",
        backgroundColor: "#00587a",
        width: "100%",
        borderRadius: 6,
        // flex: 3,
        // height: "50%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        // alignItems: "center",

        // borderWidth: 2,
        // borderColor: "#000"
        // shadowColor: "#fff",
        // shadowOpacity: 50,
        overflow: "hidden" 
    },

    icon: {
        backgroundColor: "#008891",
        margin: 5,

        padding: 5,

        textAlignVertical: "center",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 6
    },

    button: {
        color: "#fff",

        width: 140,
        height: 70,
        marginTop: 20,
        marginBottom: 20,

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