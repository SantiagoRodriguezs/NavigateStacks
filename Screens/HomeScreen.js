import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Home</Text>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.box} onPress={() => navigateTo('Mi Perfil')}>
            <AntDesign name="user" size={24} color="white" />
            <Text style={styles.boxText}>Mi Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateTo('Videos')}>
            <AntDesign name="videocamera" size={24} color="white" />
            <Text style={styles.boxText}>Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateTo('Fotos')}>
            <AntDesign name="picture" size={24} color="white" />
            <Text style={styles.boxText}>Fotos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateTo('Audios')}>
            <AntDesign name="sound" size={24} color="white" />
            <Text style={styles.boxText}>Audios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateTo('Ocio')}>
            <AntDesign name="smileo" size={24} color="white" />
            <Text style={styles.boxText}>Ocio</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.box} onPress={() => navigateTo('Login')}>
            <AntDesign name="logout" size={24} color="white" />
            <Text style={styles.boxText}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: 'purple',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'purple',
    width: '45%',
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;

//ssanchez@gmail.com