import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OcioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a Ocio</Text>
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

export default OcioScreen;
