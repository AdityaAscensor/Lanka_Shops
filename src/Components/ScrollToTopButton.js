import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ScrollToTopButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.scrollButton} onPress={onPress}>
      <Text style={styles.scrollButtonText}>↑</Text>
    </TouchableOpacity>
  );
};

export default ScrollToTopButton;

const styles = StyleSheet.create({
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
