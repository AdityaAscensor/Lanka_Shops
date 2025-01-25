import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} >
        <Text style={{ color: 'orange' }}>Lanka</Text>
        <Text style={{ color: 'black', paddingLeft: 10 }}>{" "}Shops</Text>
      </Text>
      <Image
        source={require('../Assets/logo/Taglines.pdf-image-006.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'orange',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Navbar;
