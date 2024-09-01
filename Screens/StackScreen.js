import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegistrarseScreen from './RegistrarseScreen';
import HomeScreen from './HomeScreen';
import PerfilScreen from './PerfilScreen';  
import VideosScreen from './VideosScreen';  
import FotosScreen from './FotosScreen';    
import AudiosScreen from './AudiosScreen';  
import OcioScreen from './OcioScreen';      

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registro"
          component={RegistrarseScreen}
          options={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mi Perfil"
          component={PerfilScreen}
          options={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="Videos"
          component={VideosScreen}
          options={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="Fotos"
          component={FotosScreen}
          options={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="Audios"
          component={AudiosScreen}
          options={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="Ocio"
          component={OcioScreen}
          options={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
