import React, { useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { categories } from '../../Data/category/data';



import AdBanner from '../../Components/AdComponent'; 


const adsData = [
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


const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      // onPress={() => navigation.navigate(iconScreens[item.route])}
      onPress={()=>{
        const routeName = categories.find((category)=> category.name === item.name);
        navigation.navigate(routeName.route);
      }}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a grid with 2 columns
        renderItem={renderCategoryItem}
        contentContainerStyle={styles.list}
      />
    

    {/* Ads are here */}
    <View style={styles.adsContainer}>
    <FlatList
      data={adsData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AdBanner ad={item} />}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      // pagingEnabled={false} // Ensures only one ad is visible at a time
      snapToAlignment="center" // Aligns the ad to the center of the screen
      decelerationRate="fast" // Makes the snapping smooth and quick
    />
  </View>
    </View>




  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  list: {
    justifyContent: 'center',
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 2, // For shadow effect
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
  },

  adsContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  }
});

export default CategoryScreen;
