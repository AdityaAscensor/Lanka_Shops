// import React, { useState } from 'react';
// import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';


// const Obituary = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [personName, setPersonName] = useState('');
//   const [country, setCountry] = useState('');
//   const [packageType, setPackageType] = useState('');
//   const [membership, setMembership] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handleSubmit = () => {
//     if (name && email && phone && personName && country && packageType) {
//       Alert.alert("Form submitted successfully!");
//     } else {
//       Alert.alert("Please fill all the fields");
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Service for Obituary Notice</Text>

//       <Text style={styles.label}>First & Last Name</Text>
//       <TextInput 
//         style={styles.input} 
//         placeholder="Enter your full name" 
//         value={name} 
//         onChangeText={setName} 
//       />

//       <Text style={styles.label}>Your E-Mail Address</Text>
//       <TextInput 
//         style={styles.input} 
//         placeholder="Enter your email" 
//         value={email} 
//         onChangeText={setEmail} 
//       />

//       <Text style={styles.label}>Phone Number</Text>
//       <TextInput 
//         style={styles.input} 
//         placeholder="Enter your phone number" 
//         value={phone} 
//         onChangeText={setPhone} 
//       />

//       <Text style={styles.label}>Person Name (Deceased)</Text>
//       <TextInput 
//         style={styles.input} 
//         placeholder="Enter the deceased person's name" 
//         value={personName} 
//         onChangeText={setPersonName} 
//       />

//       <Text style={styles.label}>Country</Text>
//       <Picker
//         selectedValue={country}
//         style={styles.picker}
//         onValueChange={(itemValue) => setCountry(itemValue)}
//       >
//         <Picker.Item label="Select Country" value="" />
//         <Picker.Item label="United States" value="US" />
//         <Picker.Item label="Canada" value="CA" />
//         <Picker.Item label="United Kingdom" value="UK" />
//         {/* Add more countries here */}
//       </Picker>

//       <Text style={styles.label}>Service Package</Text>
//       <Picker
//         selectedValue={packageType}
//         style={styles.picker}
//         onValueChange={(itemValue) => setPackageType(itemValue)}
//       >
//         <Picker.Item label="Select Package" value="" />
//         <Picker.Item label="Basic - £72.00" value="basic" />
//         <Picker.Item label="Standard - £84.00" value="standard" />
//         <Picker.Item label="Premium - £150.00" value="premium" />
//         {/* Add more packages here */}
//       </Picker>

//       <Text style={styles.label}>Membership Type</Text>
//       <Picker
//         selectedValue={membership}
//         style={styles.picker}
//         onValueChange={(itemValue) => setMembership(itemValue)}
//       >
//         <Picker.Item label="Select Membership" value="" />
//         <Picker.Item label="Live Coverage - £100.00" value="liveCoverage" />
//         <Picker.Item label="Additional Decedent - £60.00" value="additionalDecedent" />
//         {/* Add more membership types here */}
//       </Picker>

//       <Text style={styles.label}>Payment Method</Text>
//       <Picker
//         selectedValue={paymentMethod}
//         style={styles.picker}
//         onValueChange={(itemValue) => setPaymentMethod(itemValue)}
//       >
//         <Picker.Item label="Stripe (Credit Card)" value="stripe" />
//         <Picker.Item label="Offline Payment (Wire Transfer)" value="offline" />
//       </Picker>

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     marginVertical: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 16,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginBottom: 16,
//     padding: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
    
//   },
// });

// export default Obituary;


import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Obituary = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [personName, setPersonName] = useState('');
  const [country, setCountry] = useState('');
  const [packageType, setPackageType] = useState('');
  const [membership, setMembership] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = () => {
    if (name && email && phone && personName && country && packageType) {
      Alert.alert("Form submitted successfully!");
    } else {
      Alert.alert("Please fill all the fields");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView 
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.header}>Service for Obituary Notice</Text>

        <Text style={styles.label}>First & Last Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your full name" 
          value={name} 
          onChangeText={setName} 
        />

        <Text style={styles.label}>Your E-Mail Address</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your email" 
          value={email} 
          onChangeText={setEmail} 
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your phone number" 
          value={phone} 
          onChangeText={setPhone} 
        />

        <Text style={styles.label}>Person Name (Deceased)</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter the deceased person's name" 
          value={personName} 
          onChangeText={setPersonName} 
        />

        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={country}
          style={styles.picker}
          onValueChange={(itemValue) => setCountry(itemValue)}
        >
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="United States" value="US" />
          <Picker.Item label="Canada" value="CA" />
          <Picker.Item label="United Kingdom" value="UK" />
        </Picker>

        <Text style={styles.label}>Service Package</Text>
        <Picker
          selectedValue={packageType}
          style={styles.picker}
          onValueChange={(itemValue) => setPackageType(itemValue)}
        >
          <Picker.Item label="Select Package" value="" />
          <Picker.Item label="Basic - £72.00" value="basic" />
          <Picker.Item label="Standard - £84.00" value="standard" />
          <Picker.Item label="Premium - £150.00" value="premium" />
        </Picker>

        <Text style={styles.label}>Membership Type</Text>
        <Picker
          selectedValue={membership}
          style={styles.picker}
          onValueChange={(itemValue) => setMembership(itemValue)}
        >
          <Picker.Item label="Select Membership" value="" />
          <Picker.Item label="Live Coverage - £100.00" value="liveCoverage" />
          <Picker.Item label="Additional Decedent - £60.00" value="additionalDecedent" />
        </Picker>

        <Text style={styles.label}>Payment Method</Text>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="Stripe (Credit Card)" value="stripe" />
          <Picker.Item label="Offline Payment (Wire Transfer)" value="offline" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    padding: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Obituary;
