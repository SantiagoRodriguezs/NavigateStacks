import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Button, Modal, Pressable } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';

const FotosScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      
      if (status === 'granted') {
        const { assets } = await MediaLibrary.getAssetsAsync({
          mediaType: 'photo',
          first: 20,
        });
        setPhotos(assets);
      }
    })();
  }, []);

  const openModal = (uri) => {
    setCurrentImage(uri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setModalVisible(false);
  };

  if (!hasPermission) {
    return <Text>No access to photos</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Take Photo"
          onPress={() => navigation.navigate('Tomar Fotos')}
        />
      </View>
      <Text style={styles.title}>Galería</Text>
      <Text style={styles.text}>Por favor toque la imagen que desea detallar</Text>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer} onPress={() => openModal(item.uri)}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      {}
      <Modal
        visible={modalVisible}
        transparent={false}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.closeButton}
            onPress={closeModal}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
          {currentImage ? (
            <Image
              source={{ uri: currentImage }}
              style={styles.modalImage}
            />
          ) : null}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,  
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    zIndex: 1,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 20,
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', 
  },
});

export default FotosScreen;
