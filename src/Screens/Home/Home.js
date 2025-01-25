// Imports
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { iconsData, boxData } from '../../Data/home/data';

import AdBanner from '../../Components/AdComponent'; 




const adData = [
  {
    id: 'ad1',
    image: require('../../Assets/ads/ads.jpg'), // Replace with your ad image
    link: 'https://example.com/ad1', // Replace with your ad link
  },
  {
    id: 'ad2',
    image: require('../../Assets/logo/Taglines.pdf-image-006.png'),
    link: 'https://example.com/ad2',
  },
];


// Main HomeScreen Component
const HomeScreen = ({ navigation }) => {




  
  // State Management
  const [searchQuery, setSearchQuery] = useState(''); // Stores search input
  const [expanded, setExpanded] = useState(false); // Toggles icon list expansion


  const [adsData , setAdsData]= useState(adData);
  const [refreshing, setRefreshing]= useState(false);


  const refreshAds = () => {
    setRefreshing(true);
    const shuffledAds = [...adData].sort(() => Math.random() - 0.5);
    setAdsData(shuffledAds);
    setTimeout(() => setRefreshing(false), 1000); // Corrected setTimeout
  };
  


  // Derived State for Icons
  const visibleIcons = expanded ? iconsData : iconsData?.slice(0, 4);

  // Toggle Expansion
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          {/* Header Image Background */}
          <ImageBackground
            source={require('../../Assets/home/SriLankaHome.jpg')}
            style={[styles.bgImage, expanded && styles.bgImageExpanded]} // Highlight expanded style
            resizeMode="cover"
          >
            {/* Overlay for Dark Effect */}
            <View style={styles.overlay}>
              {/* Search Bar */}
              <View style={styles.searchBarContainer}>
                <SearchBar
                  placeholder="Where Today...?"
                  onChangeText={setSearchQuery} // Updates searchQuery state
                  value={searchQuery}
                  containerStyle={styles.searchBarStyle}
                  inputContainerStyle={styles.searchBarInputContainer}
                  inputStyle={styles.searchBarInput}
                />
              </View>

              {/* Icons Grid */}
              <FlatList
                data={visibleIcons}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.iconWrapper}
                    // onPress={() => navigation.navigate(iconScreens[item.name])}
                    onPress={()=> {
                      const routeName = iconsData.find((icon)=> icon.title === item.title);
                      navigation.navigate(routeName.navi);
                                       }}
                  >
                    <Icon name={item.name} size={30} color="orange" />
                    <Text style={styles.iconText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.iconsContainer}
              />

              {/* Toggle Button */}
              <TouchableOpacity
                style={[styles.toggleButton, { top: expanded ? 350 : 170 }]} // Dynamic position
                onPress={toggleExpanded}
              >
                <Icon
                  name={expanded ? "remove-circle-outline" : "add-circle-outline"}
                  size={40}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* Ads are here */}
          <View style={styles.adsContainer}>
  <FlatList
    data={adsData}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <AdBanner ad={item} />}
    showsHorizontalScrollIndicator={false}
    scrollEnabled={false}
    snapToAlignment="center"
    decelerationRate="fast"
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={refreshAds} />
    }
  />
</View>

          {/* Header Text */}
          <View style={styles.textContainer}>
            <Text style={styles.helloText}>What's The Plan Today?</Text>
            <View style={styles.separator}></View>
            <Text style={styles.optionText}>Some Option Below For you!</Text>
          </View>
        </View>
      }

      // Box Data Rendering
      data={boxData}
      keyExtractor={(item) => item.id}
      numColumns={1}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.box}
          // onPress={() => navigation.navigate(iconScreens[item.title])}
          onPress= {() => {
            const RN = boxData.find((box)=> box.title === item.title);
            navigation.navigate(RN.navi);
          }}
        >
        <View style={styles.box}>
          <Image source={item.image} style={styles.boxImage} />
          <Text style={styles.overlayText}>{item.title}</Text>
        </View>
        </TouchableOpacity>
      )}

      // Footer Section
      ListFooterComponent={
        <ImageBackground
          source={require('../../Assets/home/secondImage.jpeg')}
          style={styles.footerBgImage}
          resizeMode="cover"
        >
          <View style={styles.footerContent}>
            <Text style={styles.footerText}>Tradings..!</Text>
            <Text style={styles.footerSubText}>
              Check out exciting places near you.
            </Text>

            {/* Footer FlatList */}
            <FlatList
              data={[
                { id: '1', title: 'Tour', Image: require('../../Assets/home/tour.jpg') },
                { id: '2', title: 'Place B', Image: require('../../Assets/home/Dine-out.jpg') },
                { id: '3', title: 'Place C', Image: require('../../Assets/home/relax.jpg') },
                { id: '4', title: 'Place D', Image: require('../../Assets/home/Clothing.jpg') },
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.flatListItem}
                  onPress={() => navigation.navigate(boxData[item.title])}
                >
                  <View style={styles.circularContainer}>
                    <ImageBackground
                      source={item.Image}
                      style={styles.circularImage}
                      imageStyle={{ opacity: 0.7 }}
                    >
                      <Text style={styles.footerOverlayText}>{item.title}</Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ImageBackground>
      }
      contentContainerStyle={styles.listContent}
    />
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: 250,
  },
  bgImageExpanded: {
    height: 430,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  searchBarContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchBarStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    borderRadius: 20,
  },
  searchBarInput: {
    color: 'black',
  },
  iconsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 9,
    paddingHorizontal: 5,
  },
  iconText: {
    color: 'white',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  toggleButton: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: '10%',
    backgroundColor:'#f5b767'
  },
  helloText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#757575',
    width: '80%',
    marginVertical: 10,
  },
  boxContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  boxImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    opacity: 0.8, // Make the image semi-transparent
    shadowOpacity:0.9,
  },
  overlayText: {
    position: 'absolute', // Position the text over the image
    top: '80%', // Center vertically
    left: '55%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Adjust for centering
    color: 'black', // Make the text color white for contrast
    fontSize: 18, // Larger font size
    fontWeight: 'bold', // Bold text for emphasis
    textAlign: 'center', // Center align text
  },
  listContent: {
    paddingBottom: 20,
  },

  footerText:{
    fontWeight:"bold",
    // fontSize:20,

  },
  footerBgImage: {
    width: '100%',
    minHeight: 300, // Ensures it has sufficient height
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footerContent: {
    flex: 1, // Ensures it fills the parent container
    width: '100%', // Matches the full width of the background
    backgroundColor: 'rgba(222, 222, 222, 0.5)',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center', // Centers content vertically
  },
  
  flatListContainer: {
    paddingTop: 10,
    paddingBottom: 20, // Add bottom padding to prevent overlap with the footer
    alignItems: 'center',
  },
  adsContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  flatListItem: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  circularContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  circularImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  footerOverlayText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute', // Ensures the text appears on top of the image
  },
  
    
});

export default HomeScreen;




