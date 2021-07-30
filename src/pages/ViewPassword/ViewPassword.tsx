import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import Clipboard from '@react-native-community/clipboard';

import FlashMessage, { showMessage } from "react-native-flash-message";

import {iPassword } from '../../interface/Password';

import PasswordServices from '../../database/services/Password'

export default function ViewPassword(props:any) {
    const navigate = useNavigation();
    let identifier: number = 0;
    if (props.route.params){
        identifier = props.route.params.id;
    } else {
        navigate.navigate('ManagerPassword')
    }
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

    const [load, setLoad] = useState<boolean>(true);
    
    async function setValueToClipboard(valueName: any, value: any) {
            Clipboard.setString(value);
    }
    async function handlePasswordView(id: number){
        
        await PasswordServices.findById(id)
            .then((response: any)=>{
                setPwdObj({
                    "icon": response._array[0].icon,
                    "id": response._array[0],
                    "link": response._array[0].link ? response._array[0].link : " ",
                    "password": response._array[0].password,
                    "title": response._array[0].title,
                    "username": response._array[0].username,
                  })
                handleLoader()
            })
    }
    function handleLoader(state: boolean = false){
        state ? setLoad(state): setLoad(false);
    }
    async function handlePasswordDelete(id: number){
        handleLoader(true)
        await PasswordServices.deleteById(id)
            .then((response: any)=>{
                navigate.navigate('ManagerPassword',{updatePasswords: true})
            })
            .catch(err=>{
                throw new Error(err)
            })
            
    }
    function handlePasswordPreview(){
        state ? setState(false) : setState(true)
    }
    function passwordHasher(){
        let i:number;
        let hashed: string = '';
        for(i=0;i<password.length;i++){
            hashed += '•';
        }
        return hashed;
    }

    useEffect(()=>{
            setTitle(pwdObj.title);
            setUsername(pwdObj.username);
            setPassword(pwdObj.password);
            setLink(pwdObj.link);
        
    },[load])

    handlePasswordView(identifier)

    return (
        <View style={styles.container}>
            <FlashMessage position="top" />
            <ActivityIndicator 
                color="#008891" 
                size={100}
                animating={load}
                hidesWhenStopped={true}
                style={styles.loader}
            />
            <View style={styles.groupIcon}>
                <Ionicons
                    onPress={() => navigate.navigate('ManagerPassword')}
                    name="md-arrow-back"
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

            <View 
                style={styles.field}
                onTouchStart={() => setValueToClipboard("username",username)}
            >
                <FontAwesome
                    style={styles.icons}
                    name="user"
                    color="#008891"
                />
                <Text style={styles.text} >
                    {username}
                </Text>
            </View>

            <View 
                style={styles.field}
                onTouchStart={() => setValueToClipboard("password",password)}
            >
                <FontAwesome
                    style={styles.icons}
                    name="key"
                    color="#008891"
                />
                <Text
                    style={styles.inputPassword}
                >
                    {state ? passwordHasher() : password}
                </Text>
                <Feather
                    style={styles.iconEye}
                    name={state ? "eye-off" : "eye"}
                    color="#008891"
                    onPress={()=>handlePasswordPreview()}
                />
            </View>

            <View 
                style={styles.field}
                onTouchStart={() => setValueToClipboard("link",link)}
            >
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
    loader:{
        position: 'absolute',
        zIndex: 5,
        width:100,
        height:100,
        top:50,
        alignSelf:'center',        
    }
})