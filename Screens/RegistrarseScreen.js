import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, TextInput, ScrollView } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function RegistrarseScreen() {
    const navigation = useNavigation();

    const data = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
        { label: 'Ninguno', value: 'Ninguno' }
    ];

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'purple' }]}>
                    Género
                </Text>
            );
        }
    };

    const saveDataRegister = async () => {
        if (!userName || !userLastName || !userPhone || !userEmail || !userAdress || !value || !userPassword) {
            simpleAlertHandler('Debe diligenciar todos los campos.', 0);
        } else {
            simpleAlertHandler('Los datos fueron almacenados', 1);

            const data = {
                username: userName,
                lastname: userLastName,
                phone: userPhone,
                email: userEmail,
                address: userAdress,
                genero: value,
                pass: userPassword
            };

            await AsyncStorage.setItem('UserData', JSON.stringify(data));
        }
    };

    const simpleAlertHandler = (message, value) => {
        Alert.alert(message);
        if (value === 0) {
            return;
        } else {
            navigation.navigate('Home');
        }
    };

    const [userName, setName] = useState('');
    const [userLastName, setLastName] = useState('');
    const [userPhone, setPhone] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userAdress, setAdress] = useState('');
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [userPassword, setPassword] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.cajaTexto}>
                <TextInput
                    placeholder='Nombre Completo'
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={userName}
                />
            </View>

            <View style={styles.cajaTexto}>
                <TextInput
                    placeholder='Apellido Completo'
                    style={styles.input}
                    onChangeText={(text) => setLastName(text)}
                    value={userLastName}
                />
            </View>

            <View style={styles.cajaTexto}>
                <TextInput
                    placeholder='Teléfono'
                    style={styles.input}
                    onChangeText={(text) => setPhone(text)}
                    value={userPhone}
                />
            </View>

            <View style={styles.cajaTexto}>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={userEmail}
                />
            </View>

            <View style={styles.cajaTexto}>
                <TextInput
                    placeholder='Dirección'
                    style={styles.input}
                    onChangeText={(text) => setAdress(text)}
                    value={userAdress}
                />
            </View>

            <View style={styles.cajaTexto}>
                {renderLabel()}
                <Dropdown
                    search
                    maxHeight={300}
                    labelField='label'
                    valueField='value'
                    placeholder={!isFocus ? 'Genero' : '...'}
                    searchPlaceholder='Search...'
                    data={data}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    style={styles.dropdown} // Aplicar estilo aquí
                />
            </View>

            <View style={styles.cajaTexto}>
                <TextInput
                    placeholder='Contraseña'
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={userPassword}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.padreButton}>
                <Button
                    title='Registrar'
                    color={'purple'}
                    onPress={() => { saveDataRegister() }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    cajaTexto: {
        backgroundColor: '#cccccc40',
        borderRadius: 30,
        marginVertical: 10,
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 10, // Añadir padding horizontal
    },
    input: {
        paddingHorizontal: 15,
    },
    padreButton: {
        marginTop: 20,
    },
});
