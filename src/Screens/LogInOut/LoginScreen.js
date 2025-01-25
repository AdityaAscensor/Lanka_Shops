import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.Container}>
            {/* Main container for the login form */}
            <View style={styles.BoxContainer}>
                <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>
                    Login
                </Text>

                {/* Email/Phone Input */}
                <Text> Email/Phone Number </Text>
                <TextInput
                    style={styles.TextInput}
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                    placeholder="Enter Email or Phone"
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
                    placeholder="Enter Password"
                />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            {/* Navigation to SignUp */}
            <Text
                style={{ marginTop: 10, color: 'blue' }}
                onPress={() => navigation.navigate('SignUp')}
            >
                Don't have an account? Create One Here
            </Text>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    BoxImage: {
        resizeMode: 'cover',
        height: height,
        width: width
    },
    Container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    BoxContainer: {
        backgroundColor: 'rgba(155, 151, 151, 0.3)',
        width: 300,
        height: 300,
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 20,
        opacity: 1,
    },
    TextInput: {
        borderWidth: 2,
        width: 250,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    btn: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'orange',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
