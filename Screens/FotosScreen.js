import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Button } from 'react-native';

const FotosScreen = () => {

const navigation = useNavigation();
  
const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style = {styles.container}>
      <View  style = {styles.buttom}>
        <Button
          title="Take Photo"
          icon=""
          onPress={() => navigateTo('Tomar Fotos')}
        />
      </View>
      <Text style = {styles.tittle}>Galeria</Text>
      <Text style = {styles.text}>Por favor toque la imagen que desea detallar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttom: {
    marginTop: 10 ,
    width: 160
  },

  tittle: {
    fontSize: 20 ,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },

  text: {
    textAlign: 'center',
    marginTop: 5
  }
});

export default FotosScreen;
