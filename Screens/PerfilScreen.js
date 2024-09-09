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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Image style={styles.avatar} source={require('../assets/avatar.png')} />
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nombre: {userData.username}</Text>
          <Text style={styles.label}>Apellido: {userData.lastname}</Text>
          <Text style={styles.label}>Teléfono: {userData.phone}</Text>
          <Text style={styles.label}>Email: {userData.email}</Text>
          <Text style={styles.label}>Dirección: {userData.address}</Text>
          <Text style={styles.label}>Género: {userData.genero}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  profileCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
    color: 'purple',
  },
});

export default PerfilScreen;
