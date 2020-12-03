import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextInput } from 'react-native-gesture-handler';

import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function ViewPassword() {
    const navigate = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.groupIcon}>
                <Ionicons
                    // style={styles.backIcon}
                    onPress={() => navigate.navigate('ManagerPassword')}
                    name="md-arrow-round-back"
                    size={40} color="#008891"
                />

                <Feather
                    onPress={() => navigate.navigate('CreatePassword')}
                    name="edit"
                    size={40} color="#008891"
                />
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="bookmark"
                    color="#008891"
                />
                <Text style={styles.text} >
                    Title
                </Text>
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="user"
                    color="#008891"
                />
                <Text style={styles.text} >
                    Username
                </Text>
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="key"
                    color="#008891"
                />
                <TextInput
                    style={styles.inputPassword}
                    secureTextEntry={true}
                    value="Password"
                />
                <Feather
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
                <Text style={styles.text} >
                    http://facebook.com/
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",

        backgroundColor: "#0F3057",

        flex: 1,
        alignItems: "center",
    },

    groupIcon: {
        width: "95%",

        flexDirection: "row",
        justifyContent: "space-between",

        marginTop: 10,
        marginBottom: 40,
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

    text: {
        color: "#fff",

        width: 300,
        minHeight: 50,

        fontSize: 24,
        textAlignVertical: "center",
        paddingLeft: 5,

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },

    inputPassword: {
        width: 265,
        height: 50,

        color: "#fff",

        fontSize: 24,
        paddingLeft: 5,
        paddingRight: 5,
    },

    icons: {
        backgroundColor: "#0F3057",
        fontSize: 30,

        width: 40,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",
    },

    iconEye: {
        fontSize: 30,

        width: 37,
        height: 50,

        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",
    },
})