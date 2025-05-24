/* eslint-disable react-native/no-inline-styles */
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/store/themeStore';

import { styles as lightLoginStyles } from '../styles/authStyles/login/loginLight';
import { styles as darkLoginStyles } from '../styles/authStyles/login/loginDark';
import { styles as lightAltLoginStyles } from '../styles/authStyles/login/loginLightAlt';
import { styles as darkAltLoginStyles } from '../styles/authStyles/login/loginDarkAlt';

const Login = ({ navigation }: { navigation: any }) => {
    // const theme = 'light';
    // const theme = 'dark';
    // const theme = 'lightAlt';
    // const theme = 'darkAlt';
    const theme = useAppSelector((state) => state.theme.theme);
    const backgroundColor = (theme === 'light' || theme === 'lightAlt') ? '#f9f9f9' : '#000';

    let tempStyles;
    if (theme === 'light') {
        tempStyles = lightLoginStyles;
    }
    else if (theme === 'lightAlt') {
        tempStyles = lightAltLoginStyles;
    }
    else if (theme === 'dark') {
        tempStyles = darkLoginStyles;
    }
    else {
        tempStyles = darkAltLoginStyles;
    }
    const styles = StyleSheet.create(tempStyles);

    const handleLogin = () => {
        console.log('Login Button Pressed');
        // navigation.navigate('Onboarding');
        navigation.replace('Main');
    };

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[styles.container, { backgroundColor }]}
            >

                <SafeAreaView style={[styles.container, { backgroundColor }]}>
                    <LinearGradient
                        colors={
                            theme === 'light' ? ['#fff', 'transparent', '#fff'] :
                                theme === 'lightAlt' ? ['#E6C6A8', 'transparent', '#A8D7D1'] :
                                    theme === 'dark' ? ['#000', 'transparent', '#000'] :
                                        theme === 'darkAlt' ? ['#6B3B1A', 'transparent', '#3D7F78'] :
                                            ['#E6C6A8', '#A8D7D1']
                        } // Top to bottom gradient
                        style={styles.gradientContainer}
                    >
                        <View style={styles.loginCard}>
                            {/* Logo */}
                            <Image
                                source={require('../../assets/logo-rectangle.png')}
                                style={{ width: 230, height: 80, resizeMode: 'contain', alignSelf: 'center', marginBottom: 0, marginTop: 15 }}
                            />


                            {/* <?xml version="1.0" encoding="utf-8"?> */}
                            <Text style={styles.loginTitle}>Login</Text>

                            <Text style={styles.label}>Email / Phone</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your phone / email here..."
                                placeholderTextColor="#999"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            <View style={styles.passwordRow}>
                                <Text style={styles.label}>Password</Text>
                                <TouchableOpacity>
                                    <Text style={styles.forgot}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter password here..."
                                placeholderTextColor="#999"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            {/* reCAPTCHA Placeholder */}
                            <View style={styles.centeredViewCaptcha}>
                                <View style={styles.captcha}>
                                    <Text>I'm not a robot</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.signInBtn} onPress={handleLogin}>
                                <Text style={styles.signInText}>Sign in</Text>
                            </TouchableOpacity>

                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, paddingVertical: 15 }}>
                                <View style={styles.lineBesideOr} />
                                <Text style={styles.orText}>OR</Text>
                                <View style={styles.lineBesideOr} />
                            </View>

                            <TouchableOpacity style={styles.registerBtn} onPress={() => { navigation.replace('Register'); }} >
                                <Text style={styles.registerText}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Login;

