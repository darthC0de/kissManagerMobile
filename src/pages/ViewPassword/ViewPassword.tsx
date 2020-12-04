import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

import {iPassword } from '../../interface/Password';
import PasswordServices from '../../database/services/Password'

export default function ViewPassword(props:any) {
    const navigate = useNavigation();
    const identifier = props.route.params.id;
    const [ pwdObj, setPwdObj] = useState<iPassword>({
        "icon": "",
        "id": 0,
        "link": "",
        "password": "",
        "title": "",
        "username": "",
      });
    const [title, setTitle] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [state, setState] = useState<boolean>(true);
    
    async function handlePasswordView(id: number){
        let pwd = await PasswordServices.findById(id)
            .then((response: any)=>{
                setPwdObj(response._array[0])
            })
    }
    async function handlePasswordDelete(id: number){
        await PasswordServices.deleteById(id)
            .then((response: any)=>{
                setPwdObj({
                    "icon": "",
                    "id": 0,
                    "link": "",
                    "password": "",
                    "title": "",
                    "username": "",
                  })
                navigate.navigate('ManagerPassword')
            })
            .catch(err=>console.log(err))
            
    }
    function handlePasswordPreview(){
        state ? setState(false) : setState(true)
    }

    useEffect(()=>{
        pwdObj.id = identifier
        setTitle(pwdObj.title)
        setUsername(pwdObj.username)
        setPassword(pwdObj.password)
        setLink(pwdObj.link)
    },[pwdObj])
    
    handlePasswordView(identifier)

    return (
        <View style={styles.container}>
            <View style={styles.groupIcon}>
                <Ionicons
                    onPress={() => navigate.navigate('ManagerPassword')}
                    name="md-arrow-round-back"
                    size={40} color="#008891"
                />

                <Feather
                    style={styles.editIcon}
                    onPress={() => navigate.navigate('EditPassword',{id:identifier})}
                    name="edit"
                    size={40} color="#008891"
                />
                <Feather
                    onPress={() => handlePasswordDelete(identifier)}
                    name="trash"
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
                    {title}
                </Text>
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="user"
                    color="#008891"
                />
                <Text style={styles.text} >
                    {username}
                </Text>
            </View>

            <View style={styles.field}>
                <FontAwesome
                    style={styles.icons}
                    name="key"
                    color="#008891"
                />
                <Text
                    style={styles.inputPassword}
                >
                    {state ? "••••••••••" : password}
                </Text>
                <Feather
                    style={styles.iconEye}
                    name={state ? "eye-off" : "eye"}
                    color="#008891"
                    onPress={()=>handlePasswordPreview()}
                />
            </View>

            <View style={styles.field}>
                <Feather
                    style={styles.icons}
                    name="link"
                    color="#008891"
                />
                <Text style={styles.text} >
                    {link}
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
    editIcon:{
        position: "absolute",
        right: 50,
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