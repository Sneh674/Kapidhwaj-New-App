/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { useAppSelector } from '../../redux/store/themeStore';

import { styles as lightAddCameraStyles } from '../../styles/onboardingStyles/onboardingLight';
import { styles as darkAddCameraStyles } from '../../styles/onboardingStyles/onboardingDark';

const AddCamera = ({ navigation }) => {
    // const theme = 'light';
    // const theme = 'dark';
    // const theme = 'lightAlt';
    // const theme = 'darkAlt';
    const theme = useAppSelector((state) => state.theme.theme);

    let tempStyles;
    if (theme === 'light' || theme === 'lightAlt') {
        tempStyles = lightAddCameraStyles;
    } else {
        tempStyles = darkAddCameraStyles;
    }
    const styles = StyleSheet.create(tempStyles);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={
                    theme === 'light' ? ['#fff', 'transparent', '#fff'] :
                        theme === 'lightAlt' ? ['#E6C6A8', 'transparent', '#A8D7D1'] :
                            theme === 'dark' ? ['#000', 'transparent', '#000'] :
                                ['#6B3B1A', 'transparent', '#3D7F78']
                }
                style={styles.gradientContainer}
            >
                <Image
                    source={require('../../../assets/logo-rectangle.png')}
                    style={{ width: 530, height: 70, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }}
                />
                <View style={styles.content}>
                    <Image
                        source={require('../../../assets/onboardingAssets/addCamera.png')} // make sure this asset exists
                        style={{ width: 350, height: 350, resizeMode: 'contain', alignSelf: 'center' }}
                    />
                    <Text style={styles.title}>Add Your Camera</Text>
                    <Text style={styles.description}>connect your camera to start real-time video monitoring</Text>
                    <TouchableOpacity
                        style={styles.onboardingButton}
                        onPress={() => console.log('Add Camera Button Pressed')}
                    >
                        <Image
                            source={require('../../../assets/onboardingAssets/addCameraIcon.png')} // make sure this asset exists
                            style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center', marginRight: 10 }}
                        />
                        <Text style={styles.onboardingButtonText}>Add Camera</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.onboardingFooter}>
                    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.footerArrow}>‹</Text>
                        <Text style={styles.footerButtonText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.stepNum}>Step 4</Text>
                    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.footerButtonText}>Finish</Text>
                        <Text style={styles.footerArrow}>›</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default AddCamera;
