import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VideosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a Audios</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    color: 'purple',
  },
});

export default VideosScreen;
