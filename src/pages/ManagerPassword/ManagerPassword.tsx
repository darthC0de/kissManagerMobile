import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather,AntDesign, Ionicons } from '@expo/vector-icons';

export default function ManagerPassword() {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.groupIcon}>
                <Ionicons
                    onPress={() => navigate.navigate('Main')}
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
                <View style={styles.passwordInfo}>
                    <Feather name="database" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="credit-card" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.figma.com/file/uQmfjWFmuPZ3oDKzZO8UTw/MobileApp?node-id=5%3A45</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="cloud" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="globe" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="hash" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="heart" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="home" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="inbox" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="mail" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="monitor" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>

                <View style={styles.passwordInfo}>
                    <Feather name="smartphone" size={30} color="#00587A" />
                    <View style={styles.groupInfo}>
                        <Text style={styles.groupInfoTitle}>Title</Text>
                        <Text style={styles.groupInfoLink}>https://www.lastpass.com/</Text>
                    </View>
                </View>
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

        borderRadius: 15,
    },

    groupInfo: {
        maxWidth: "85%",
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