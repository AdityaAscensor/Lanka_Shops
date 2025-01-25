import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';



// Screens
import HomeScreen from '../Screens/Home/Home';
import CategoryScreen from '../Screens/Category/Category';
import Obituary from '../Screens/Obituary/obituary';
import LoginScreen from '../Screens/LogInOut/LoginScreen';

import { useNavigation } from '@react-navigation/native';

const BottomNavBar = ({  }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isAdVisible,  setIsAdVisible]= useState(true);

  useEffect(() => {
    const checkAdVisibility = async () => {
      const adStatus = await AsyncStorage.getItem('isAdVisible');
      if (adStatus === 'false') {
        setIsAdVisible(false); // Hide the ad if it was closed before
      }
    };

    checkAdVisibility();
  }, []);

  const navigation = useNavigation();

  const tabs = [
    { name: 'Home', iconName: 'home', iconType: 'MaterialIcons', component: HomeScreen },
    { name: 'Category', iconName: 'category', iconType: 'MaterialIcons', component: CategoryScreen },
    { name: 'Obituary', iconName: 'book-dead', iconType: 'FontAwesome5', component: Obituary },
    { name: 'Login', iconName: 'login', iconType: 'MaterialIcons', component: LoginScreen }
  ];

  const handlePress = (tabName, Component) => {
    setActiveTab(tabName);
    navigation.navigate(tabName); // Navigate to the selected tab's screen
  };

  const renderIcon = (iconName, iconType) => {
    if (iconType === 'MaterialIcons') {
      return <Icon name={iconName} size={30} />;
    } else if (iconType === 'FontAwesome5') {
      return <FaIcon name={iconName} size={30} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Ad Container */}
      {isAdVisible && (
        <View style={styles.adContainer}>
          <Text style={styles.adText}>This is an ad!</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsAdVisible(false)} // Hide the ad
          >
            <Icon name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabButton}
            onPress={() => handlePress(tab.name, tab.component)}
          >
            {renderIcon(tab.iconName, tab.iconType)}
            <Text style={styles.tabLabel}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f39c12',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  adText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
    backgroundColor: '#e74c3c',
    borderRadius: 15,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: 'gray',
  }
});

export default BottomNavBar;
