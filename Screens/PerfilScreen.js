import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilScreen = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('UserData');
      if (data) {
        setUserData(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        style={styles.avatar}
        source={require('../assets/avatar.png')} // Cambia esto por la URL del avatar si es necesario
      />
      <View style={styles.profileCard}>
        <Text style={styles.label}>Nombre:   {'  '} {userData.username}</Text>
        <Text style={styles.label}>Apellido: {'  '} {userData.lastname}</Text>
        <Text style={styles.label}>Teléfono: {'  '} {userData.phone}</Text>
        <Text style={styles.label}>Email:     {'  '} {userData.email}</Text>
        <Text style={styles.label}>Dirección: {'  '} {userData.address}</Text>
        <Text style={styles.label}>Género:   {'  '} {userData.genero}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
    padding: 20,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
});

export default PerfilScreen;
