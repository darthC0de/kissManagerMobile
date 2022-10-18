import React from 'react';
import {  Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import { Container } from './styles';

const Button =>()=>{
    return <RectButton style={styles.button} onPress={() => {}}>
    <Container
        colors={['#0080b3', '#006e99', '#005b80', '#00587A']}
        // style={{
        //     position: 'absolute',
        //     left: 0,
        //     right: 0,
        //     top: 0,
        //     bottom: 0,
        //     borderRadius: 15,

        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',

        // }}
    >
        <Feather name="save" size={32} color="#fff" />
        <Text style={styles.textButton}>Salvar</Text>
    </Container>
</RectButton>
}

export default React.memo(Button);

const styles = StyleSheet.create({
    
    
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