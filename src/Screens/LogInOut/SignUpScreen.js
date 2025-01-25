import React, { useState } from "react";
import Navigation from "../../Navigation/stackNavigation";
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('window'); // Get device screen dimensions

const SignUp = ({ navigation }) => {
    // State variables to store user input
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.Container}>
            {/* Main container for the signup form */}
            <View style={styles.BoxContainer}>
                <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>
                    Sign Up
                </Text>

                {/* First Name Input */}
                <Text> First Name </Text>
                <TextInput
                    style={styles.TextInput}
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                />

                {/* Middle Name Input */}
                <Text> Middle Name </Text>
                <TextInput
                    style={styles.TextInput}
                    value={middleName}
                    onChangeText={setMiddleName}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                />

                {/* Last Name Input */}
                <Text> Last Name </Text>
                <TextInput
                    style={styles.TextInput}
                    value={lastName}
                    onChangeText={setLastName}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                />

                {/* Phone Number Input */}
                <Text> Phone Number </Text>
                <TextInput
                    style={styles.TextInput}
                    value={phone}
                    onChangeText={setPhone}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                />

                {/* Email Address Input */}
                <Text> Email Address </Text>
                <TextInput
                    style={styles.TextInput}
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                {/* Password Input */}
                <Text> Password </Text>
                <TextInput
                    style={styles.TextInput}
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                    secureTextEntry={true} // Hide password input
                />

                {/* Confirm Password Input */}
                <Text> Confirm Password </Text>
                <TextInput
                    style={styles.TextInput}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                    secureTextEntry={true} // Hide confirm password input
                />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.btn}>
                <Text
                    style={styles.btnText}
                    onPress={() => navigation.navigate('Login')} // Navigate to Login screen on press
                >
                    Sign Up
                </Text>
            </TouchableOpacity>

            <Text
            style={{ marginTop: 10, color: 'blue' }}
            onPress={() => navigation.navigate('Login')}
            >
                Have an account? Login Here
            </Text>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    BoxImage:{
        resizeMode: 'cover',
        height:height,
        width:width

    },
    Container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        fontSize:30 ,
        fontWeight:'bold',
        justifyContent:'center',

    },

    BoxContainer:{
        backgroundColor: 'rgba(155, 151, 151, 0.3)',
        width:300,
        height:530,
        alignItems:'center',
        paddingBottom:30,
        opacity:1,
        
    },

    TextInput:{
        borderWidth:2,
        width:250,

    },
    btn: {
        marginVertical: 10,      // Adds vertical spacing
        marginHorizontal: 20,    // Adds horizontal spacing
        borderWidth: 1,          // Thinner border for cleaner look
        borderColor: '#ccc',     // Light gray border color
        backgroundColor: 'orange', // Bright button color
        borderRadius: 8,         // Rounded corners
        paddingVertical: 12,     // Uniform vertical padding
        paddingHorizontal: 20,   // Uniform horizontal padding
        alignItems: 'center',    // Center-align text inside button
      },
      btnText: {
        color: 'white',          // White text for contrast
        fontSize: 16,            // Standard text size
        fontWeight: 'bold',      // Bold text for emphasis
        textAlign: 'center',     // Center text alignment
      },
      

})
