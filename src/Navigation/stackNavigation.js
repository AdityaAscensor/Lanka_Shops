
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';


// navBars
import NavBar from '../Navigation/NavBar';
import BottomNavBar from '../Navigation/BottomNavigation';

// Screens
import HomeScreen from '../Screens/Home/Home';
import CategoryScreen from '../Screens/Category/Category';
import Obituary from '../Screens/Obituary/obituary';
import ParkScreen from '../Screens/Park/ParkScreen';
import TourScreen from '../Screens/TourScreen';
import LoginScreen from '../Screens/LogInOut/LoginScreen';
import SignUpScreen from '../Screens/LogInOut/SignUpScreen';

// Create Stack Navigator
const Stack = createNativeStackNavigator();

// Main navigation component
const Navigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* NavBar as header */}
        <NavBar />

        {/* Stack Navigator for screen navigation */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Obituary" component={Obituary} />
          <Stack.Screen name="Park" component={ParkScreen} />
          <Stack.Screen name="Tour" component={TourScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>

        {/* BottomNavBar is rendered outside the stack but within the container */}
        <BottomNavBar />
      </View>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure it takes the full height of the screen
    flexDirection: 'column', // Stack components vertically
  },
});
