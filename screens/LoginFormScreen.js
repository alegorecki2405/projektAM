import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

const LoginFormScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput style={styles.textInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontsize: 40,
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        width: 150,
        textAlign: 'center',
        marginTop:10,
    },
    text: {
        fontsize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        fontsize: 20,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#000',
        padding: 10,
        width: 200,
        marginTop:10,
    }
});

export default LoginFormScreen;