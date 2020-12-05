import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';

import {iPassword } from '../../interface/Password';
import PasswordServices from '../../database/services/Password'


export default function ManagerPassword (){
    

    const navigate = useNavigation();
    const [passwords, setPasswords] = useState<Array<iPassword>>([]);

    async function updatePasswordsList() {
        const passwords = await PasswordServices.findAll()
            .then((response: any)=>{
                setPasswords(response._array)
            })
    }

    useEffect(()=>{
        updatePasswordsList()
    },[])
    
    
        
    async function handleViewPassword(id: number){
        navigate.navigate('ViewPassword',{id})
    }

    return (
        <View style={styles.container}>
            <View style={styles.groupIcon}>
                <Ionicons
                    onPress={() => navigate.goBack()}
                    name="md-arrow-round-back"
                    size={40} color="#008891"
                />

                <AntDesign
                    onPress={() => navigate.navigate('CreatePassword')}
                    name="pluscircleo"
                    size={40} color="#008891"
                />
            </View>

            <ScrollView style={styles.containerPassword}>
            {
                passwords.map(password=>(
                    <TouchableOpacity key={password.id} onPress={()=>handleViewPassword(password.id)} style={styles.passwordInfo}>
                    <Feather name={password.icon} size={30} color="#00587A" />
                            <View key={password.id} style={styles.groupInfo}>
                                <Text style={styles.groupInfoTitle}>{password.title}</Text>
                                <Text style={styles.groupInfoLink}>{password.link}</Text>
                            </View>
                    
                    </TouchableOpacity>
                ))
            }
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0F3057",
        height: "100%",
    },

    groupIcon: {
        flexDirection: "row",
        justifyContent: "space-between",

        margin: 10
    },

    containerPassword: {
        marginBottom: 5
    },

    passwordInfo: {
        backgroundColor: "#fff",

        width: 350,
        minHeight: 90,

        padding: 10,
        marginTop: 10,

        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",

        borderRadius: 15,
    },

    groupInfo: {
        width: "76%",
        maxHeight: 100,

        marginLeft: 10,
        overflow: "hidden",
    },

    groupInfoTitle: {
        color: "#0F3057",
        fontSize: 30
    },

    groupInfoLink: {
        color: "#008891",
        fontSize: 17,
    }
})