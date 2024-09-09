import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UploadVideoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a Upload Video</Text>
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

export default UploadVideoScreen;
