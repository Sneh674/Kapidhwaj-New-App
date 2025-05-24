/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/store/themeStore';

import { styles as lightRegisterStyles } from '../styles/authStyles/register/registerLight';
import { styles as darkRegisterStyles } from '../styles/authStyles/register/registerDark';
import { styles as lightAltRegisterStyles } from '../styles/authStyles/register/registerLightAlt';
import { styles as darkAltRegisterStyles } from '../styles/authStyles/register/registerDarkAlt';

const Register = ({ navigation }) => {
  const theme = 'light';
  // const theme = 'dark';
  // const theme = 'lightAlt';
  // const theme = 'darkAlt';
  // const theme = useAppSelector((state) => state.theme.theme);
  const backgroundColor = (theme === 'light' || theme === 'lightAlt') ? '#f9f9f9' : '#000';


  let tempStyles;
  if (theme === 'light') {
    tempStyles = lightRegisterStyles;
  } else if (theme === 'lightAlt') {
    tempStyles = lightAltRegisterStyles;
  } else if (theme === 'dark') {
    tempStyles = darkRegisterStyles;
  } else {
    tempStyles = darkAltRegisterStyles;
  }
  const styles = StyleSheet.create(tempStyles);

  const handleCreateAccount = () => {
    console.log('Create Account Button Pressed');
    navigation.navigate('Onboarding');
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
            }
            style={styles.gradientContainer}
          >
            <View style={styles.registerCard}>
              {/* Logo */}
              <Image
                source={require('../../assets/logo-rectangle.png')}
                style={{ width: 230, height: 80, resizeMode: 'contain', alignSelf: 'center', marginBottom: 0, marginTop: 15 }}
              />

              <Text style={styles.registerTitle}>Register</Text>

              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '100%', gap: 10 }}>
                <View>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={[styles.input, { width: '100%', maxWidth: '100%' }]}
                    placeholder="Enter first name..."
                    placeholderTextColor="#999"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={[styles.input, { width: '100%', maxWidth: '100%' }]}
                    placeholder="Enter last name..."
                    placeholderTextColor="#999"
                  />
                </View>
              </View>

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email here..."
                placeholderTextColor="#999"
              />

              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone here..."
                placeholderTextColor="#999"
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
              />

              {/* reCAPTCHA Placeholder */}
              {/* <View style={styles.centeredViewCaptcha}>
            <View style={styles.captcha}>
              <Text>I'm not a robot</Text>
            </View>
          </View> */}

              <TouchableOpacity style={styles.createAccBtn} onPress={handleCreateAccount}>
                <Text style={styles.createAccText}>Create Account</Text>
              </TouchableOpacity>

              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, paddingVertical: 15 }}>
                <View style={styles.lineBesideOr} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.lineBesideOr} />
              </View>

              <TouchableOpacity style={styles.signInBtn} onPress={() => { navigation.replace('Login'); }}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;
