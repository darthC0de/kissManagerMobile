import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlashMessage, { showMessage } from "react-native-flash-message";

import { TextInput, RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import passwordGenerator from '../../utils/passwordGenerator';
import {iPassword } from '../../interface/Password';
import PasswordServices from '../../database/services/Password'

import { Feather, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function EditPassword(props: any) {
    const [title, setTitle] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>(props.route.params ? props.route.params.password : '');
    const [link, setLink] = useState<string>('');
    const [icon, setIcon] = useState<any>('');
    const [activeIcon, setActiveIcon] = useState<boolean>(false);
    const [ pwdObj, setPwdObj] = useState<iPassword>({
        "icon": "",
        "id": 0,
        "link": "",
        "password": "",
        "title": "",
        "username": "",
      });
    
    let counter = 0;

    const icons = ["database","credit-card","cloud","globe","hash","heart","home","inbox","mail","monitor","smartphone","shield","terminal","user","lock","aperture","book","bookmark","code","cpu"]

    const navigate = useNavigation();

    useEffect(()=>{
        handleGetPasswordData(props.route.params.id)
    },[])
    
    useEffect(()=>{
        pwdObj.id = props.route.params.id
        pwdObj.title = props.route.params.title
        pwdObj.username = props.route.params.username
        pwdObj.password = props.route.params.password
        pwdObj.link = props.route.params.link
        pwdObj.icon = props.route.params.icon
        
    },[title,username,password,link,icon])
    
    async function handleGetPasswordData(id: number){
        let pwd = await PasswordServices.findById(id)
            .then((response: any)=>{
                setPwdObj(response._array[0])
                setTitle(response._array[0].title)
                setUsername(response._array[0].username)
                // console.log(response._array)
                setLink(response._array[0].link)
            })
    }
    
    async function getPassword() {
        let pwd = await passwordGenerator()
        setPassword(pwd)
    }

    function handleIconSelect(i: string){
        // let element = document.querySelector(`name=${i}`)
        // console.log(element)
        setIcon(i)
    }
    async function handleSavePassword(){
        let pwdObj: iPassword = new iPassword(title, username, password, link, icon)
        const response = await PasswordServices.updateById(pwdObj)
            .then(async (response) =>{
                showMessage({
                    message: "Senha salva com sucesso",
                    type: "success",
                });
                navigate.navigate('ManagerPassword',{updatePasswords: true})
            })
            .catch(err=>console.log(err))
    }

    

    return (
            <ScrollView style={styles.container}>
                <FlashMessage position="top" />
                <Ionicons
                    style={styles.backIcon}
                    onPress={() => navigate.goBack()}
                    name="md-arrow-back"
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
                        value={title}
                        onChangeText={setTitle}
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
                        value={username}
                        onChangeText={setUsername}
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
                        onChangeText={setPassword}
                        value={password}
                    />
                    <AntDesign
                        onPress={() => getPassword()}
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
                        value={link}
                        onChangeText={setLink}
                    />
                </View>

                <Text style={styles.textSelectIcon}>Selecione um ícone</Text>
                <View>
                    <View style={styles.selectIcons}>
                        {
                            icons.map(i=>{
                                counter++;
                                return (
                                <Feather key={counter} style={activeIcon ? styles.iconActive : styles.icon} onPress={()=>handleIconSelect(i)} name={i} size={30} color="#fff" />
                                )
                            }
                            )
                        }
                    </View>
                </View>

                <RectButton style={styles.button} onPress={() => handleSavePassword()}>
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
                </RectButton>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",

        backgroundColor: "#0F3057",

        flex: 1,
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
        color: "#333",

        width: 300,
        height: 50,

        fontSize: 24,

        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    inputPassword: {
        backgroundColor: "#fff",
        color: "#333",

        width: 265,
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
    iconActive: {
        backgroundColor: "#00becc",
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