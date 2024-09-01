import React, { useState } from "react";
import { Text, Image, ImageBackground, StyleSheet, TextInput, Alert, Button, View, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen () {

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const navigation = useNavigation();

    const handleButtonPress = async (userEmail, userPassword) => {
        if (!userEmail || !userPassword) {
            simpleAlertHandler('Debe diligenciar los campos presentados.', 0)
            return;
        }

        const Data = {
            user: userEmail,
            pas: userPassword
        }

        const dataUser = await AsyncStorage.getItem('UserData');
        const parseData = dataUser ? JSON.parse(dataUser) : {};

        if (parseData.email === userEmail && parseData.pass === userPassword) {
            simpleAlertHandler('Datos existentes.', 1);
        } else {
            simpleAlertHandler('Datos incorrectos.', 0);
        }
    };

    const simpleAlertHandler = (message, value) => {
        alert(message);
        if (value === 0) {
            return;
        } else {
            navigation.navigate('Home');
        }
    };

    return (
        <ImageBackground style={styles.BackImage} source={require('../assets/FondoMovil.png')}>
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Image style={styles.imageAvatar} source={require('../assets/avatar.png')} />
                </View>
                <View style={styles.tarjeta}>
                    <View style={styles.cajaTexto}>
                        <TextInput 
                            placeholder="correo@gmial.com"
                            style={{ paddingHorizontal: 15 }}
                            onChangeText={(text) => setEmail(text)}
                            value={userEmail}
                        />
                    </View>

                    <View style={styles.cajaTexto}>
                        <TextInput 
                            placeholder="Password"
                            style={{ paddingHorizontal: 15 }}
                            onChangeText={(text) => setPassword(text)}
                            value={userPassword}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.padreButton}>
                        <TouchableOpacity 
                            disabled={false}
                            style={styles.cajaBoton}
                            onPress={() => { handleButtonPress(userEmail, userPassword) }}
                        >
                            <Text style={styles.textoBoton}>Sing In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.padreButton}>
                        <TouchableOpacity
                            disabled={false}
                            style={styles.cajaLink}
                            onPress={() => { navigation.navigate('Registro') }}
                        >
                            <Text style={styles.textoLink}>Sing Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    BackImage: {
        width: '100%',
        height: '100%'
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageAvatar: {
        width: 150,
        height: 150,
        textAlign: 'center',
        alignContent: 'center',
    },
    tarjeta: {
        marginTop: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cajaTexto: {
        backgroundColor: '#cccccc40',
        borderRadius: 30,
        paddingVertical: 10,
        marginVertical: 10
    },
    padreButton: {
        alignItems: 'center'
    },
    cajaBoton: {
        backgroundColor: 'purple',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 10
    },
    cajaLink: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 10
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white'
    },
    textoLink: {
        color: 'purple',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
});
