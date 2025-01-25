
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';



const screenWidth = Dimensions.get('window').width;

const AdBanner = ({ ad }) => (
    <TouchableOpacity onPress={() => alert(`Ad Clicked: ${ad.link}`)}>
      <Image source={ad.image} style={styles.adImage} />
    </TouchableOpacity>
  );
  
  export default AdBanner; // Default export
  


  const styles = StyleSheet.create({
    // Existing styles...
    
    adImage: {
      width: 300,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
      resizeMode: 'cover',
    },
    adImage: {
        width: screenWidth - 20, // Full-screen width minus padding
        height: 200, // Adjust height as needed
        borderRadius: 10,
        marginRight: 10,
        resizeMode: 'cover', // Ensure the image covers the space properly
      },
    });
