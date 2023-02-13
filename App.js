import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import pexelsLogo from './assets/pexels.png'
import ImageScreen from './screens/ImageScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen'
          options={{
            headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
            headerRight: () => (<Text style={{ color: 'white', fontSize: 18 }} onPress={() => setOpenSearch(!openSearch)} >{ openSearch ? 'Close' : 'Search' }</Text>),
            title: 'Pexels App',
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#000000'
            }
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen name='ImageScreen' component={ImageScreen} 
          options={{
            title: 'Pexels App',
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#000000'
            }
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5
  }
})

