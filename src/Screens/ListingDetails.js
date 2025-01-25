import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListingDetails = ({ route }) => {
  // const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      {/* Add more details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default ListingDetails;
