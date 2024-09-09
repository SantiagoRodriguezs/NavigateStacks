import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const VideosScreen = () => {
  const [videos, setVideos] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      if (status === 'granted') {
        const { assets } = await MediaLibrary.getAssetsAsync({
          mediaType: 'video',
          first: 20,
        });
        setVideos(assets);
      }
    })();
  }, []);

  const openModal = (uri) => {
    setCurrentVideo(uri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setModalVisible(false);
  };

  if (!hasPermission) {
    return <Text>No access to videos</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Videos</Text>
      <Text style={styles.text}>Por favor toque el video que desea ver</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.videoContainer} onPress={() => openModal(item.uri)}>
            <Video
              source={{ uri: item.uri }}
              style={styles.videoThumbnail}
              useNativeControls
              resizeMode="cover"
              shouldPlay={false}
              isMuted
              isLooping
            />
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
          {currentVideo ? (
            <Video
              source={{ uri: currentVideo }}
              style={styles.modalVideo}
              useNativeControls
              resizeMode="contain"
              isLooping
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
  videoContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#eee', 
    borderRadius: 10,
    height: 100, 
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
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
  modalVideo: {
    width: '100%',
    height: '100%',
  },
});

export default VideosScreen;
