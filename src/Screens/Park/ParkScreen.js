// park.js
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity , Dimensions , ScrollView} from 'react-native';
import ScrollToTopButton from '../../Components/ScrollToTopButton'
import useScrollToTop from '../../Hooks/useScrollToTop'; 
// import { useScrollToTop } from '@react-navigation/native';


import Navigation from '../../Navigation/stackNavigation';


import { useNavigation } from '@react-navigation/native';


const parksData = [
  { id: '1', title: 'Central Park' },
  { id: '2', title: 'Green Valley Park' },
  { id: '3', title: 'Sunny Meadows' },
  { id: '4', title: 'Lakeside Park' },
  { id: '5', title: 'Mountain View Park' },
];

const Park = () => {
  // const scrollViewRef = React.useRef(null);
  const { ref, showScrollToTopButton, handleScroll, scrollToTop } = useScrollToTop();


  const renderBox = ({ item }) => (
    <TouchableOpacity style={styles.box}>
      <View style={styles.titleContainer}>
        <Text style={styles.boxTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity> 
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={parksData}
        ref={ref}
        keyExtractor={(item) => item.id}
        numColumns={1} // Display boxes in 2 columns
        ListHeaderComponent={
            <View style={styles.container}>
                <Text style={styles.HeaderName}>Explore Lanka's Parks!</Text>
            </View>
        }
        renderItem={renderBox}
        onScroll={handleScroll}
        contentContainerStyle={styles.list}
      />

      {showScrollToTopButton && <ScrollToTopButton onPress={scrollToTop} />}

      </View>
  );
};

export default Park;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  HeaderName: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  list: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    flex: 1,
    margin: 10,
    height: 200,
    backgroundColor: '#f0f0f0',
    // backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'flex-end', // Align items at the bottom
  },

  titleContainer: {
    backgroundColor: '#f5b767',
    width: '100%',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  scrollButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f5b767',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  scrollButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
